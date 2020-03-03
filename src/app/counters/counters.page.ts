import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup, PopoverController } from '@ionic/angular';

import { Counter } from '../models/counter';
import { CounterService } from '../services/counter.service';
import { CountersSettingsComponent } from './counters-settings/counters-settings.component';

@Component({
  selector: 'app-counters',
  templateUrl: 'counters.page.html',
  styleUrls: ['counters.page.scss']
})
export class CountersPage implements OnInit {

  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  constructor(
    private counterService: CounterService,
    private popoverController: PopoverController,
  ) { }

  ngOnInit() {
  }

  get counters() {
    return this.counterService.allSortBySortOrder;
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: CountersSettingsComponent,
      event: ev,
      translucent: true,
      componentProps: {
        popoverController: this.popoverController,
        reorderGroup: this.reorderGroup,
      }
    });
    return await popover.present();
  }

  async reorder(ev: any) {
    await this.counterService.reorder(
      ev.detail.from,
      ev.detail.to
    );
    ev.detail.complete();
  }

}
