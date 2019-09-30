import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Counter } from '../model/counter';

@Component({
  selector: 'app-counter-settings',
  templateUrl: './counter-settings.page.html',
  styleUrls: ['./counter-settings.page.scss'],
})
export class CounterSettingsPage implements OnInit {

  private counter: Counter;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    if (this.route.snapshot.data['counter']) {
      this.counter = this.route.snapshot.data['counter'];
    }
  }
}

