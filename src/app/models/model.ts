import { autoserialize } from 'cerialize';

import { v4 as uuid } from 'uuid';

export class Model {
  @autoserialize public id: string = uuid();
}
