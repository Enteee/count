import { Geolocation } from '@ionic-native/geolocation/ngx';
import { v4 as uuid } from 'uuid';

export class Counter {
  public id: string = uuid();
  public title: string = 'new Counter';
  public count: number = 0;
  public instance: Array<{
      count: number;
      timestamp: Date;
      location: Geolocation;
  }> = [];

  constructor() {
  }

  addInstance(
    count:number,
    timestamp:Date = new Date(),
    location:Geolocation = new Geolocation()
  ) {
    this.count += count;
    this.instance.push({
      count,
      timestamp,
      location
    });
  }

}
