import { Component, OnInit, Input } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';

import { Counter } from '../../models/counter';
import { CounterService } from '../../services/counter.service';

import { AppState } from '../../models/app-state';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-plus-minus-counter',
  templateUrl: './plus-minus-counter.component.html',
  styleUrls: ['./plus-minus-counter.component.scss'],
})
export class PlusMinusCounterComponent implements OnInit {

  static readonly VIBRATION_PATTERN_PLUS = [30];
  static readonly VIBRATION_PATTERN_MINUS = [30, 30, 30];

  @Input() counter: Counter;

  constructor(
    private counterService: CounterService,
    private appStateService: AppStateService,
    private vibration: Vibration,
  ) {}

  ngOnInit() {}

  async deleteCounter() {
    await this.counterService.delete(this.counter);
  }

  async countPlus() {
    if (
      this.appStateService.appState.vibrate
      && this.counter.vibrate
    ) {
      this.vibration.vibrate(
        PlusMinusCounterComponent.VIBRATION_PATTERN_PLUS
      );
    }
    await this.counterService.count(
      this.counter,
      this.counter.plusCount,
    );
  }

  async countMinus() {
    if (
      this.appStateService.appState.vibrate
      && this.counter.vibrate
    ) {
      this.vibration.vibrate(
        PlusMinusCounterComponent.VIBRATION_PATTERN_MINUS
      );
    }
    await this.counterService.count(
      this.counter,
      this.counter.minusCount,
    );
  }
}
