import { inheritSerialization, autoserialize } from 'cerialize';

import { Model } from './model';

import { Geolocation } from '@ionic-native/geolocation/ngx';

@inheritSerialization(Model)
export class Instance {
  @autoserialize public timestamp:Date = new Date();
  @autoserialize public location:Geolocation = new Geolocation();
}
