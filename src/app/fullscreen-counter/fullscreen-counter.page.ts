import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Counter } from '../models/counter';
import { CounterService } from '../services/counter.service';

enum FullScreenCounterType {
  plus = "plus",
  minus = "minus",
}

@Component({
  selector: 'app-fullscreen-counter',
  templateUrl: './fullscreen-counter.page.html',
  styleUrls: ['./fullscreen-counter.page.scss'],
})
export class FullscreenCounterPage implements OnInit {

  static readonly CLOSE_DELAY = 700;

  type: FullScreenCounterType;
  counter: Counter;
  color: string;

  constructor(
    private route: ActivatedRoute,
    private counterService: CounterService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.type = FullScreenCounterType[
      this.route.snapshot.paramMap.get('type')
    ];
    this.counter = this.route.snapshot.data.counter;
    switch(this.type) {
      case FullScreenCounterType.plus:
        this.color = "success";
      break;
      case FullScreenCounterType.minus:
        this.color = "danger";
      break;
    }
  }

  async close() {
    this.router.navigate([
      '/counters'
    ]);
  }

  async count() {
    await this.counterService.count(
      this.counter,
      this.type === FullScreenCounterType.plus ?
        this.counter.plusCount
        : this.counter.minusCount
    );
  }

}
