import { Component, OnInit, Input } from '@angular/core';

import { Counter } from '../../model/counter';
import { CounterService } from '../../model/counter.service';

import { CountEvent } from '../../model/count-event';
import { CountEventService } from '../../model/count-event.service';

@Component({
  selector: 'app-plus-minus-counter',
  templateUrl: './plus-minus-counter.component.html',
  styleUrls: ['./plus-minus-counter.component.scss'],
})
export class PlusMinusCounterComponent implements OnInit {

  @Input() counter: Counter;

  constructor(
    private counterService: CounterService,
    private countEventService: CountEventService
  ) {}

  ngOnInit() {}

  public deleteCounter(counter: Counter) {
    this.counterService.delete(counter);
  }

  public addCountEvent(counter: Counter, delta: number) {
    counter.count += delta;

    this.counterService.save(counter);
    this.countEventService.save(
      new CountEvent(
        counter.id,
        delta
      )
    );
  }


}
