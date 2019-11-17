import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

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

  type: FullScreenCounterType;
  counter: Counter;
  color: string;

  constructor(
    private route: ActivatedRoute,
    private counterService: CounterService,
    private navController: NavController
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

  async count() {
    await this.counterService.count(
      this.counter,
      this.type === FullScreenCounterType.plus ?
        this.counter.plusCount
        : this.counter.minusCount
    );
  }

}
