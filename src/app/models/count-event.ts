import { inheritSerialization, autoserialize, autoserializeAs } from 'cerialize';

import { Model } from './model';

import { Coordinates } from '@ionic-native/geolocation/ngx';

// From:
// https://github.com/ionic-team/ionic-native/blob/master/src/@ionic-native/plugins/geolocation/index.ts#L7
export class Position implements Coordinates {
  /**
   * a double representing the position's latitude in decimal degrees.
   */
  latitude: number;

  /**
   * A double representing the position's longitude in decimal degrees.
   */
  longitude: number;

  /**
   * A double representing the accuracy of the latitude and longitude properties,
   * expressed in meters.
   */
  accuracy: number;

  /**
   * A double representing the position's altitude in metres, relative to sea
   * level. This value can be null if the implementation cannot provide the data.
   */
  altitude: number;

  /**
   * A double representing the accuracy of the altitude expressed in meters.
   * This value can be null.
   */
  altitudeAccuracy: number;

  /**
   * A double representing the direction in which the device is traveling. This
   * value, specified in degrees, indicates how far off from heading true north
   * the device is. 0 degrees represents true north, and the direction is
   * determined clockwise (which means that east is 90 degrees and west is 270
   * degrees). If speed is 0, heading is NaN. If the device is unable to provide
   * heading information, this value is null.
   */
  heading: number;

  /**
   * A double representing the velocity of the device in meters per second.
   * This value can be null.
   */
  speed: number;
}

export enum CountEventType {
  Change = 'change',
  Reset = 'reset',
}

@inheritSerialization(Model)
export class CountEvent extends Model {
  @autoserialize public counterId: string;
  @autoserialize public delta: number;
  @autoserialize public position: Position;
  @autoserialize public type: CountEventType;
  @autoserializeAs(Date) public timestamp: Date;

  constructor(
    counterId: string,
    delta: number,
    position: Position = null,
    type = CountEventType.Change,
    timestamp: Date = new Date(),
  ) {
    super();
    this.counterId = counterId;
    this.delta = delta;
    this.position = position;
    this.type = type;
    this.timestamp = timestamp;
  }
}
