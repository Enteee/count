import { Injectable } from '@angular/core';

import { ModelRepositoryService } from './model-repository.service';
import { CountEvent } from './count-event';
import { Counter } from './counter';

@Injectable({
  providedIn: 'root'
})
export class CountEventRepositoryService extends ModelRepositoryService<CountEvent> {

  public getByCounter(counter: Counter): Array<CountEvent> {
    return this.all.filter(
      c => c.counterId === counter.id
    );
  }
}
