import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { ModelRepositoryService } from './model-repository.service';
import { Counter } from './counter';

import { CountEventRepositoryService } from './count-event-repository.service';

@Injectable({
  providedIn: 'root'
})
export class CounterRepositoryService extends ModelRepositoryService<Counter> {

  constructor(storage: Storage, private countEventRepositoryService: CountEventRepositoryService) {
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
      this.countEventRepositoryService.getByCounter(counter).map(
        (i) => this.countEventRepositoryService.delete(i)
      )
    );
  }
}
