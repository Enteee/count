import { Injectable } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';

import { Counter } from '../models/counter';
import { CounterRepositoryService } from '../models/counter-repository.service';

import { CountEvent, CountEventType } from '../models/count-event';
import { CountEventRepositoryService } from '../models/count-event-repository.service';

import { Position } from '../models/count-event';
import { PositionService } from './position.service';

import { AppStateService } from './app-state.service';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  static readonly VIBRATION_PATTERN_POSITIVE = [30];
  static readonly VIBRATION_PATTERN_NEGATIVE = [30, 30, 30];

  constructor(
    private counterRepositoryService: CounterRepositoryService,
    private countEventRepositoryService: CountEventRepositoryService,
    private positionService: PositionService,
    private appStateService: AppStateService,
    private vibration: Vibration,
  ) {}

  get allSortBySortOrder(): Array<Counter> {
    return this.counterRepositoryService.allSortBySortOrder;
  }

  async addCounter() {
    const newCounter = new Counter();
    // add counter to bottom
    newCounter.sortOrder = this.counterRepositoryService.all.length + 1;
    await this.counterRepositoryService.save(newCounter);
    return newCounter;
  }

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

    // vibrate
    if (
      this.appStateService.appState.vibrate
      && counter.vibrate
    ) {
      this.vibration.vibrate(
        (delta > 0) ?
          CounterService.VIBRATION_PATTERN_POSITIVE :
          CounterService.VIBRATION_PATTERN_NEGATIVE
      );
    }

    // apply positive and negative wraparounds
    if (
      counter.positiveLimitActive
      && counter.count > counter.positiveLimit
    ) {
      counter.count = counter.count % counter.positiveLimit;
    }

    if (
      counter.negativeLimitActive
      && counter.count < counter.negativeLimit
    ) {
      counter.count = counter.count % counter.negativeLimit;
    }

    let position = null;
    try {
      position = await this.positionService.getPosition();
    } catch (e) {
      // user does not allow posiiton recording or something unexpected happened
      await this.appStateService.setRecordPosition(false);
    }

    await Promise.all([
      this.counterRepositoryService.save(counter),
      this.countEventRepositoryService.save(
        new CountEvent(
          counter.id,
          delta,
          position,
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
          {} as any,
          CountEventType.Reset,
        )
      ),
    ]);
  }

  async setLocked(
    counter: Counter,
    setLocked: boolean,
  ) {
    counter.locked = setLocked;
    await this.counterRepositoryService.save(
      counter
    );
  }

  async reorder(
    from: number,
    to: number,
  ) {
    const counters = this.counterRepositoryService.allSortBySortOrder;
    // move element in array
    counters.splice(to, 0,
      counters.splice(from, 1)[0]
    );
    // save in new order
    await Promise.all(
      counters.map(
        async (counter, i) => {
          counter.sortOrder = i;
          await this.counterRepositoryService.save(counter);
        }
      )
    );
  }

  /**
   * For development purposes only
   */
  async addRandomCountEvent(
    counter: Counter,
  ) {
    const delta = Math.round(Math.random() * 10 % 10 - 5);
    counter.count += delta;

    function randomDate(start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }


    await Promise.all([
      this.counterRepositoryService.save(counter),
      this.countEventRepositoryService.save(
        new CountEvent(
          counter.id,
          delta,
          null,
          CountEventType.Change,
          randomDate(new Date(2012, 0, 1), new Date()),
        )
      )
    ]);
  }

}
