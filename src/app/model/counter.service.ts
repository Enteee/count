import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { ModelService } from './model.service';
import { Counter } from './counter';

import { InstanceService } from './instance.service';

@Injectable({
  providedIn: 'root'
})
export class CounterService extends ModelService<Counter> {

  constructor(storage: Storage, private instanceService: InstanceService) {
    super(storage);
  }

  public async delete(counter: Counter) {
    // delete all instance of this counter
    await Promise.all(
      this.instanceService.getByCounter(counter).map(
        (i) => this.instanceService.delete(i)
      )
    );
    await super.delete(counter);
  }
}
