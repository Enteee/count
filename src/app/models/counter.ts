import { inheritSerialization, autoserialize } from 'cerialize';

import { Model } from './model';

@inheritSerialization(Model)
export class Counter extends Model {
  @autoserialize public title = 'new Counter';
  @autoserialize public count = 0;
  @autoserialize public plusCount = 1;
  @autoserialize public minusCount = 0;
  @autoserialize public positiveLimit = 1;
  @autoserialize public positiveLimitActive = false;
  @autoserialize public negativeLimit = -1;
  @autoserialize public negativeLimitActive = false;
  @autoserialize public locked = false;
  @autoserialize public sortOrder = 0;
  @autoserialize public vibrate = true;
}
