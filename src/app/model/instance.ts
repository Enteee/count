import { inheritSerialization, autoserialize } from 'cerialize';

import { Model } from './model';

import { Geolocation } from '@ionic-native/geolocation/ngx';

@inheritSerialization(Model)
export class Instance extends Model {
  @autoserialize public count:number = 0;
  @autoserialize public timestamp:Date = new Date();
  @autoserialize public location:Geolocation = new Geolocation();

  constructor(count: number) {
    super();
    this.count = count;
  }
}
