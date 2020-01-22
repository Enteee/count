import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Counter } from '../../models/counter';

import { AnalyticsItemService } from '../../services/analytics-item.service';

@Component({
  selector: 'app-counter-analytics-selection',
  templateUrl: './counter-analytics-selection.page.html',
  styleUrls: ['./counter-analytics-selection.page.scss'],
})
export class CounterAnalyticsSelectionPage implements OnInit {

  counter: Counter;

  constructor(
    private route: ActivatedRoute,
    private analyticsItemService: AnalyticsItemService,
  ) { }

  ngOnInit() {
    this.counter = this.route.snapshot.data.counter;
  }

  get analyticsItems() {
    return this.analyticsItemService.all;
  }
}
