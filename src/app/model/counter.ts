import { autoserialize } from 'cerialize';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { v4 as uuid } from 'uuid';

export class Counter {
  @autoserialize public id: string = uuid();
  @autoserialize public title: string = 'new Counter';
  @autoserialize public count: number = 0;
  @autoserialize public plusCount: number = 1;
  @autoserialize public minusCount: number = -1;
  public instances: Array<{
      count: number;
      timestamp: Date;
      location: Geolocation;
  }> = [];

  constructor() {
  }
}
