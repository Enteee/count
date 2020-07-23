import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Serialize, Deserialize } from 'cerialize';

import { Model } from './model';

// use this to ensure that no MCtorName is used twice
const KnownMCtorNames: string[] = [];

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
@Injectable()
export class ModelRepositoryService<M extends Model> implements Resolve<M> {

  private MCtor: new (...args: any[]) => M;
  private MCtorName: string;
  protected models: Record<string, M> = {};

  constructor(private storage: Storage) {}

  public async init(MCtor: new (...args: any[]) => M, MCtorName: string) {
    /**
     * Because Typescript does not have type information available,
     * at runtime we have to pass in here the constructor of M (MCtor).
     * Because of uglify.js name mangling, we can not just use MCtor.name
     * here to get a unique object identifiert for the store. Therefore we have
     * to also ask for MCtorName here.
     * ref: https://stackoverflow.com/questions/48438666/typescript-get-class-name-in-its-own-property-at-compile-time
     */
    if (KnownMCtorNames.includes(MCtorName)){
      throw new Error(`MCtorName not unique: "${MCtorName}"`);
    }

    // we also have to make sure that no MCtorName is a prefix of another.
    for (const otherMCtorName of KnownMCtorNames) {
      if (otherMCtorName.startsWith(MCtorName)) {
        throw new Error(`MCtorName "${MCtorName}" is a prefix of ${otherMCtorName}"`);
      }

      if (MCtorName.startsWith(otherMCtorName)) {
        throw new Error(`MCtorName "${otherMCtorName}" is a prefix of ${MCtorName}"`);
      }
    }

    KnownMCtorNames.push(MCtorName);

    this.MCtor = MCtor;
    this.MCtorName = MCtorName;
    await this.loadAll();
  }

  get all(): Array<M> {
    return Object.values(this.models);
  }

  public async save(m: M) {
    this.models[m.id] = m;

    await this.storage.set(
      this.MCtorName + m.id,
      Serialize(m, this.MCtor)
    );
  }

  public async delete(m: M) {
    await this.storage.remove(
      this.MCtorName + m.id,
    );
    delete this.models[m.id];
  }

  public async deleteAll() {
    const modelsToDelete: Array<M> = [];

    await this.storage.forEach(
      (v: object, k: string) => {
        // only delete instance of this class
        if (k.startsWith(this.MCtorName)) {
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
            this.MCtorName + model.id,
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
        this.MCtorName.toLowerCase() + '-id'
      )
    );
  }

  public async loadAll() {
    await this.storage.forEach(
      (v: object, k: string) => {
        // only load instance of this class
        if (k.startsWith(this.MCtorName)) {
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
@Injectable()
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
