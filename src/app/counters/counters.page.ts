import { Component, OnInit, ViewChild } from '@angular/core';

import { Counter } from '../models/counter';
import { CounterRepositoryService } from '../models/counter-repository.service';

@Component({
  selector: 'app-counters',
  templateUrl: 'counters.page.html',
  styleUrls: ['counters.page.scss']
})
export class CountersPage implements OnInit {
  private selectedItem: any;

  constructor(
    private counterRepositoryService: CounterRepositoryService,
  ) {
  }

  ngOnInit() {
  }

  get counters() {
    return this.counterRepositoryService.all;
  }

  public addCounter() {
    this.counterRepositoryService.save(
      new Counter()
    );
  }

}
