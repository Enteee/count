import { Injectable } from '@angular/core';

import { ModelService } from './model.service';
import { CountEvent } from './count-event';

import { Counter } from './counter';

@Injectable({
  providedIn: 'root'
})
export class CountEventService extends ModelService<CountEvent> {

  public getByCounter(counter: Counter): Array<CountEvent> {
    return this.all.filter(
      c => c.counterId === counter.id
    );
  }
}
