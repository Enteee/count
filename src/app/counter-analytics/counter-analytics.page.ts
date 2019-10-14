import { Component, OnInit } from '@angular/core';
import { Counter } from '../models/counter';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counter-analytics',
  templateUrl: './counter-analytics.page.html',
  styleUrls: ['./counter-analytics.page.scss'],
})
export class CounterAnalyticsPage implements OnInit {

  counter: Counter;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.counter = this.route.snapshot.data.counter;
  }
}
