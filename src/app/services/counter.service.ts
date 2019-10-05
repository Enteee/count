import { Injectable } from '@angular/core';

import { Counter } from '../models/counter';
import { CounterRepositoryService } from '../models/counter-repository.service';

import { CountEvent } from '../models/count-event';
import { CountEventRepositoryService } from '../models/count-event-repository.service';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor(
    private counterRepositoryService: CounterRepositoryService,
    private countEventRepositoryService: CountEventRepositoryService,
  ) {}

  async delete(counter: Counter) {
    // first delete the counter: this is so that the ui element disappers
    // quicker which should be create better user experience.
    await this.counterRepositoryService.delete(counter);

    // then, delete all events of this counter
    await Promise.all(
      this.countEventRepositoryService.getByCounter(counter).map(
        (i) => this.countEventRepositoryService.delete(i)
      )
    );
  }

  async count(
    counter: Counter,
    delta: number,
  ) {
    counter.count += delta;

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

    await Promise.all([
      this.counterRepositoryService.save(counter),
      this.countEventRepositoryService.save(
        new CountEvent(
          counter.id,
          delta
        )
      )
    ]);
  }

  async reset(
    counter: Counter,
  ) {
    counter.count = 0;
    await Promise.all([
      this.counterRepositoryService.save(
        counter
      ),
      this.countEventRepositoryService.save(
        new CountEvent(
          counter.id,
          0,
          'reset'
        )
      ),
    ]);
  }
}
