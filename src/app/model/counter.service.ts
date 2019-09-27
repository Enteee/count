import { Injectable } from '@angular/core';

import { ModelService } from './model.service';
import { Counter } from './counter';

@Injectable({
  providedIn: 'root'
})
export class CounterService extends ModelService<Counter> {
}
