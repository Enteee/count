import { Component, OnInit, Input } from '@angular/core';

import { Counter } from '../../model/counter';
import { CounterRepositoryService } from '../../model/counter-repository.service';

import { CountEvent } from '../../model/count-event';
import { CountEventRepositoryService } from '../../model/count-event-repository.service';

@Component({
  selector: 'app-plus-minus-counter',
  templateUrl: './plus-minus-counter.component.html',
  styleUrls: ['./plus-minus-counter.component.scss'],
})
export class PlusMinusCounterComponent implements OnInit {

  @Input() counter: Counter;

  constructor(
    private counterRepositoryService: CounterRepositoryService,
    private countEventRepositoryService: CountEventRepositoryService
  ) {}

  ngOnInit() {}

  public deleteCounter(counter: Counter) {
    this.counterRepositoryService.delete(counter);
  }

  public addCountEvent(counter: Counter, delta: number) {
    counter.count += delta;

    this.counterRepositoryService.save(counter);
    this.countEventRepositoryService.save(
      new CountEvent(
        counter.id,
        delta
      )
    );
  }


}
