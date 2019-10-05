import { inheritSerialization, autoserialize } from 'cerialize';

import { Model } from './model';

@inheritSerialization(Model)
export class AppState extends Model {
  @autoserialize disableNotImplemented = false;
}
