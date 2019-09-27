import { Injectable } from '@angular/core';

import { ModelService } from './model.service';
import { Instance } from './instance';

import { Counter } from './counter';

@Injectable({
  providedIn: 'root'
})
export class InstanceService extends ModelService<Instance> {

  public getByCounter(counter: Counter): Array<Instance> {
    return this.all.filter(
      c => c.counterId === counter.id
    );
  }
}
