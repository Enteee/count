import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Serialize, Deserialize } from 'cerialize';

import { Counter } from './model/counter';


@Injectable({
  providedIn: 'root'
})
export class CountersService {

  private _storage: Storage;
  private _counters: Record<string, Counter> = {};

  constructor(private storage: Storage) {
    this._storage = storage;
  }

  public async init() {
    await this._storage.forEach(
      (v:Object, k:string) => {
        this._counters[k] = <Counter> Deserialize(v, Counter);
      }
    );
  }

  get counters(): Array<Counter> {
    return Object.values(this._counters);
  }

  public async save(counter: Counter) {
    this._counters[counter.id] = counter;
    await this._storage.set(
      counter.id,
      Serialize(counter)
    );
  }

  public async delete(counter: Counter) {
    await this._storage.remove(counter.id);
    delete this._counters[counter.id];
  }

  public getCounterById(id: string): Counter {
    return this._counters[id];
  }

}
