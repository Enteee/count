import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { ModelService } from './model.service';
import { Counter } from './counter';

import { CountEventService } from './count-event.service';

@Injectable({
  providedIn: 'root'
})
export class CounterService extends ModelService<Counter> {

  constructor(storage: Storage, private countEventService: CountEventService) {
    super(storage);
  }

  async save(counter: Counter) {

    // apply positive and negative wraparounds
    if (
      counter.positiveWrapAroundActive
      && counter.count > counter.positiveWrapAround
    ) {
      counter.count = counter.count % counter.positiveWrapAround;
    }
    if (
      counter.negativeWrapAroundActive
      && counter.count < counter.negativeWrapAround
    ) {
      counter.count = counter.count % counter.negativeWrapAround;
    }

    await super.save(counter);
  }

  async delete(counter: Counter) {
    // first delete the counter: this is so that the ui element dispears qucker
    // which should be create better user experience.
    await super.delete(counter);

    // then, delete all events of this counter
    await Promise.all(
      this.countEventService.getByCounter(counter).map(
        (i) => this.countEventService.delete(i)
      )
    );
  }
}
