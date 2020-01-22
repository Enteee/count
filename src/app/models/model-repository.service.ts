import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Serialize, Deserialize } from 'cerialize';

import { Model } from './model';

/**
 * A generic ModelRepositoryService which stores models in a Ionic Storage.
 *
 * Ionic Storage is just a simple key/value storage, which means this will store
 * all the models information at the same place. This is obviously not ideal.
 * On the upside Ionic Storage is highly portable and should work on all devices
 * as well as in a web browser without cordova support.
 *
 * ModelRepositoryService implements basic separation of models using constructor names.
 */
export class ModelRepositoryService<M extends Model> implements Resolve<M> {

  private MCtor: new (...args: any[]) => M;
  protected models: Record<string, M> = {};

  constructor(private storage: Storage) {}

  public async init(MCtor: new (...args: any[]) => M) {
    // Because Typescript does not have type information available,
    // at runtime we have to pass in here the constructor of M (MCtor).
    this.MCtor = MCtor;
    await this.loadAll();
  }

  get all(): Array<M> {
    return Object.values(this.models);
  }

  public async save(m: M) {
    this.models[m.id] = m;
    await this.storage.set(
      this.MCtor.name + m.id,
      Serialize(m, this.MCtor)
    );
  }

  public async delete(m: M) {
    await this.storage.remove(
      this.MCtor.name + m.id,
    );
    delete this.models[m.id];
  }

  public async deleteAll() {
    const modelsToDelete: Array<M> = [];

    await this.storage.forEach(
      (v: object, k: string) => {
        // only delete instance of this class
        if (k.startsWith(this.MCtor.name)) {
          modelsToDelete.push(
            Deserialize(
              v,
              this.MCtor
            ) as M
          );
        }
      }
    );

    await Promise.all(
      modelsToDelete.map(
        async (model) => {
          delete this.models[model.id];
          await this.storage.remove(
            this.MCtor.name + model.id,
          );
        }
      )
    );
  }

  public getById(id: string): M {
    return this.models[id];
  }

  public resolve(route: ActivatedRouteSnapshot) {
    return this.getById(
      route.paramMap.get(
        this.MCtor.name.toLowerCase() + '-id'
      )
    );
  }

  public async loadAll() {
    await this.storage.forEach(
      (v: object, k: string) => {
        // only load instance of this class
        if (k.startsWith(this.MCtor.name)) {
          const model = Deserialize(
            v,
            this.MCtor
          ) as M;
          this.models[model.id] = model;
        }
      }
    );
  }

}

/**
 * An implementation of the ModelRepositoryService which does not persist
 * any data.
 */
export class VolatileModelRepositoryService<M extends Model> extends ModelRepositoryService<M> {

  public async save(m: M) {
    this.models[m.id] = m;
  }

  public async delete(m: M) {
    delete this.models[m.id];
  }

  public async deleteAll() {
    this.models = {};
  }

  public async loadAll() {
    // noop: implement if you want to initialize this with data
  }
}
