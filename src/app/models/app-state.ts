import { inheritSerialization, autoserialize } from 'cerialize';

import { Model } from './model';

export enum UpdateChannel {
  Production = 'Production',
  Master = 'Master',
  Disabled = 'Disabled',
}

@inheritSerialization(Model)
export class AppState extends Model {
  @autoserialize disableNotImplemented = false;
  @autoserialize updateChannel = UpdateChannel.Production;
  @autoserialize recordPosition = true;
  @autoserialize vibrate = true;
}