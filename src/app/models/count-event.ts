import { inheritSerialization, autoserialize, autoserializeAs } from 'cerialize';

import { Model } from './model';

import { Geolocation } from '@ionic-native/geolocation/ngx';

type CountEventType = 'change' | 'reset';

@inheritSerialization(Model)
export class CountEvent extends Model {
  @autoserialize public counterId: string;
  @autoserialize public delta: number;
  @autoserialize public type: CountEventType;
  @autoserializeAs(Date) public timestamp: Date = new Date();
  // TODO: Store geolocation
  // @autoserializeAs(Geolocation) public location: Geolocation = new Geolocation();

  constructor(
    counterId: string,
    delta: number,
    type = 'change' as CountEventType,
  ) {
    super();
    this.counterId = counterId;
    this.delta = delta;
    this.type = type;
  }
}
