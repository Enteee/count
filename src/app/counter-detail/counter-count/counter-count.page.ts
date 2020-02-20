import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Counter } from '../../models/counter';
import { CounterService } from '../../services/counter.service';

type ClampFunction = 'max' | 'min';

@Component({
  selector: 'app-counter-count',
  templateUrl: './counter-count.page.html',
  styleUrls: ['./counter-count.page.scss'],
})
export class CounterCountPage implements OnInit {

  counter: Counter;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private counterService: CounterService,
  ) {}

  ngOnInit() {
    this.counter = this.route.snapshot.data.counter;
  }

  addRandomCountEvent(){
    this.counterService.addRandomCountEvent(this.counter);
  }
}

