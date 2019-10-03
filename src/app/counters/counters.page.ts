import { Component, OnInit, ViewChild } from '@angular/core';

import { Counter } from '../model/counter';
import { CounterService } from '../model/counter.service';

import { CountEvent } from '../model/count-event';
import { CountEventService } from '../model/count-event.service';

@Component({
  selector: 'app-counters',
  templateUrl: 'counters.page.html',
  styleUrls: ['counters.page.scss']
})
export class CountersPage implements OnInit {
  private selectedItem: any;

  constructor(
    private counterService: CounterService,
    private countEventService: CountEventService
  ) {
  }

  get counters() {
    return this.counterService.all;
  }

  public addCounter() {
    this.counterService.save(
      new Counter()
    );
  }

  public deleteCounter(counter: Counter) {
    this.counterService.delete(counter);
  }

  public addCountEvent(counter: Counter, count: number) {
    counter.count += count;

    this.counterService.save(counter);
    this.countEventService.save(
      new CountEvent(
        counter.id,
        count
      )
    );
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/counters', JSON.stringify(item)]);
  // }
}
