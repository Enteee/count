import { inheritSerialization, autoserialize } from 'cerialize';

import { Model } from './model';

@inheritSerialization(Model)
export class Counter extends Model {
  @autoserialize public title: string = 'new Counter';
  @autoserialize public count: number = 0;
  @autoserialize public plusCount: number = 1;
  @autoserialize public minusCount: number = -1;
}
