import { inheritSerialization, autoserialize } from 'cerialize';

import { Model } from './model';

@inheritSerialization(Model)
export class Counter extends Model {
  @autoserialize public title = 'new Counter';
  @autoserialize public count = 0;
  @autoserialize public plusCount = 1;
  @autoserialize public minusCount = -1;
}
