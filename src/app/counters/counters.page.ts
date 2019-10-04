import { Component, OnInit, ViewChild } from '@angular/core';

import { Counter } from '../model/counter';
import { CounterService } from '../model/counter.service';

@Component({
  selector: 'app-counters',
  templateUrl: 'counters.page.html',
  styleUrls: ['counters.page.scss']
})
export class CountersPage implements OnInit {
  private selectedItem: any;

  constructor(
    private counterService: CounterService,
  ) {
  }

  ngOnInit() {
  }

  get counters() {
    return this.counterService.all;
  }

  public addCounter() {
    this.counterService.save(
      new Counter()
    );
  }

}
