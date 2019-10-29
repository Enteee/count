import { Component, OnInit, Input } from '@angular/core';

import { Counter } from '../../models/counter';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-plus-minus-counter',
  templateUrl: './plus-minus-counter.component.html',
  styleUrls: ['./plus-minus-counter.component.scss'],
})
export class PlusMinusCounterComponent implements OnInit {

  @Input() counter: Counter;

  constructor(
    private counterService: CounterService,
  ) {}

  ngOnInit() {}

  async deleteCounter() {
    await this.counterService.delete(this.counter);
  }

  async countPlus() {
    await this.counterService.count(
      this.counter,
      this.counter.plusCount,
    );
  }

  async countMinus() {
    await this.counterService.count(
      this.counter,
      this.counter.minusCount,
    );
  }
}
