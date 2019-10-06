import { inheritSerialization, autoserialize } from 'cerialize';

import { Model } from './model';

@inheritSerialization(Model)
export class Counter extends Model {
  @autoserialize public title = 'new Counter';
  @autoserialize public count = 0;
  @autoserialize public plusCount = 1;
  @autoserialize public minusCount = 0;
  @autoserialize public positiveWrapAround = 0;
  @autoserialize public positiveWrapAroundActive = false;
  @autoserialize public negativeWrapAround = 0;
  @autoserialize public negativeWrapAroundActive = false;
  @autoserialize public locked = false;
}
