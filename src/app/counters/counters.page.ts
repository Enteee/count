import { Component, OnInit, ViewChild } from '@angular/core';

import { Counter } from '../model/counter';
import { CounterService } from '../model/counter.service';

import { Instance } from '../model/instance';
import { InstanceService } from '../model/instance.service';

@Component({
  selector: 'app-counters',
  templateUrl: 'counters.page.html',
  styleUrls: ['counters.page.scss']
})
export class CountersPage implements OnInit {
  private selectedItem: any;

  constructor(
    private counterService: CounterService,
    private instanceService: InstanceService
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

  public addInstance(counter: Counter, count: number) {
    counter.count += count;

    this.counterService.save(counter);
    this.instanceService.save(
      new Instance(
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
