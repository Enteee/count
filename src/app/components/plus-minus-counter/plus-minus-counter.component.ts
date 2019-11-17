import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Counter } from '../../models/counter';
import { CounterService } from '../../services/counter.service';

import { AppState } from '../../models/app-state';
import { AppStateService } from '../../services/app-state.service';

import { FullScreenCounterType } from '../../fullscreen-counter/fullscreen-counter.page';

@Component({
  selector: 'app-plus-minus-counter',
  templateUrl: './plus-minus-counter.component.html',
  styleUrls: ['./plus-minus-counter.component.scss'],
})
export class PlusMinusCounterComponent implements OnInit {

  static readonly FULL_SCREEN_COUNTER_DELAY = 700;

  @Input() counter: Counter;

  constructor(
    private router: Router,
    private counterService: CounterService,
    private appStateService: AppStateService,
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

  async openFullScreenCounter(
    type:FullScreenCounterType,
  ){
    this.router.navigate([
      '/fullscreen-counter',
      type,
      this.counter.id,
    ]);
  }
}
