import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';

import { Counter } from '../models/counter';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counters',
  templateUrl: 'counters.page.html',
  styleUrls: ['counters.page.scss']
})
export class CountersPage implements OnInit {

  @ViewChild(IonReorderGroup, {static: false}) reorderGroup: IonReorderGroup;

  constructor(
    private counterService: CounterService,
  ) { }

  ngOnInit() {
  }

  get counters() {
    return this.counterService.all;
  }

  async addCounter() {
    await this.counterService.addCounter();
  }

  toggleReorder() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }

  async reorder(ev: any) {
    await this.counterService.reorder(
      ev.detail.from,
      ev.detail.to
    );
    ev.detail.complete();
  }

}
