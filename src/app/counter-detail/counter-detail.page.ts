import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Counter } from '../models/counter';

@Component({
  selector: 'app-counter-detail',
  templateUrl: './counter-detail.page.html',
  styleUrls: ['./counter-detail.page.scss'],
})
export class CounterDetailPage implements OnInit {

  counter: Counter;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.counter = this.route.snapshot.data.counter;
  }

}
