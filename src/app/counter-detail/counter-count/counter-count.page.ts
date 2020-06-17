import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AppState } from '../../models/app-state';
import { Counter } from '../../models/counter';
import { CounterService } from '../../services/counter.service';

type ClampFunction = 'max' | 'min';

@Component({
  selector: 'app-counter-count',
  templateUrl: './counter-count.page.html',
  styleUrls: ['./counter-count.page.scss'],
})
export class CounterCountPage implements OnInit {

  appState: AppState;
  counter: Counter;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private counterService: CounterService,
  ) {}

  ngOnInit() {
    this.appState = this.route.snapshot.data.appState;
    this.counter = this.route.snapshot.data.counter;
  }

  async addRandomCountEvent() {
    await this.counterService.addRandomCountEvent(this.counter);
  }

  async reset() {
    await this.counterService.reset(this.counter);
  }

  async deleteCounter() {
    // We want to make the impression that this operation
    // is very quick. So we first navigate away.
    this.router.navigate([
      '/counters',
    ]);
    await this.counterService.delete(this.counter);
  }

}

