import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IonReorderGroup, PopoverController } from '@ionic/angular';

import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counters-settings',
  templateUrl: './counters-settings.component.html',
  styleUrls: ['./counters-settings.component.scss'],
})
export class CountersSettingsComponent implements OnInit {

  @Input() popoverController: PopoverController;
  @Input() reorderGroup: IonReorderGroup;

  constructor(
    private counterService: CounterService,
    private router: Router,
  ) { }

  ngOnInit() {}

  async addCounter() {
    const newCounter = await this.counterService.addCounter();
    await Promise.all([
      this.router.navigate([
        '/counter-detail',
        newCounter.id,
        'settings',
        {
          focusTitle: true,
        },
      ]),
      this.popoverController.dismiss()
    ]);
  }

  async toggleReorder() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
    await this.popoverController.dismiss();
  }

}
