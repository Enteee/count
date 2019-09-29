import { inheritSerialization, autoserialize } from 'cerialize';

import { Model } from './model';

import { Geolocation } from '@ionic-native/geolocation/ngx';

@inheritSerialization(Model)
export class Instance extends Model {
  @autoserialize public counterId: string;
  @autoserialize public count: number;
  @autoserialize public timestamp: Date = new Date();
  @autoserialize public location: Geolocation = new Geolocation();

  constructor(counterId: string, count: number) {
    super();
    this.counterId = counterId;
    this.count = count;
  }
}
