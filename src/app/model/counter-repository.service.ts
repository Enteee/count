import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { ModelRepositoryService } from './model-repository.service';
import { Counter } from './counter';

import { CountEventRepositoryService } from './count-event-repository.service';

@Injectable({
  providedIn: 'root'
})
export class CounterRepositoryService extends ModelRepositoryService<Counter> {
}
