import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Serialize, Deserialize } from 'cerialize';

import { Model } from './model';

/**
 * A generic ModelService which stores models in a Ionic Storage.
 *
 * Ionic Storage is just a simple key/value storage, which means this will store
 * all the model information at the same place. This is obviously not ideal.
 * On the upside Ionic Storage is highly portable and should work on all devices
 * as well as in a web browser without cordova support.
 *
 * ModelService implements basic separation of models using constructor names.
 */
export class ModelService<M extends Model> {

  private models: Record<string, M> = {};
  private MCtor: new (...args: any[]) => M;

  constructor(private storage: Storage) {
  }

  public async init(MCtor: new (...args: any[]) => M) {
    // Because Typescript does not have type information available,
    // at runtime we have to pass in here the constructor of M (MCtor).
    this.MCtor = MCtor;

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

  public getById(id: string): M {
    return this.models[id];
  }
}
