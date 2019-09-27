import { Component, OnInit, ViewChild } from '@angular/core';

import { Counter } from '../model/counter';
import { CountersService } from '../counters.service';

@Component({
  selector: 'app-counters',
  templateUrl: 'counters.page.html',
  styleUrls: ['counters.page.scss']
})
export class CountersPage implements OnInit {
  private selectedItem: any;

  constructor(private countersService: CountersService) {
  }

  get counters() {
    return this.countersService.counters;
  }

  public addCounter() {
    this.countersService.save(
      new Counter()
    );
  }

  public deleteCounter(counter: Counter){
    this.countersService.delete(counter);
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/counters', JSON.stringify(item)]);
  // }
}
