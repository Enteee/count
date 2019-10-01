import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { NavController } from '@ionic/angular';

import { Counter } from '../model/counter';
import { CounterService } from '../model/counter.service';

@Component({
  selector: 'app-counter-settings',
  templateUrl: './counter-settings.page.html',
  styleUrls: ['./counter-settings.page.scss'],
})
export class CounterSettingsPage implements OnInit {

  private counter: Counter;
  counterSettingsForm = new FormGroup({
    title : new FormControl(
      '',
      [
      ]
    ),
    plusCount : new FormControl(
      1,
      [
        Validators.min(0)
      ]
    ),
    minusCount : new FormControl(
      -1,
      [
        Validators.max(0)
      ]
    ),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private counterService: CounterService,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.counter = this.route.snapshot.data.counter;
    if (this.counter) {
      this.counterSettingsForm.patchValue(this.counter);
    }
  }

  async onSubmit() {
    await this.counterService.save(
      Object.assign(
        this.counter,
        this.counterSettingsForm.value
      )
    );
    this.navController.pop();
  }

  clampMinusCount() {
    this.counterSettingsForm.patchValue({
      minusCount: Math.min(
        0,
        this.counterSettingsForm.get('minusCount').value
      )
    });
  }

  clampPlusCount() {
    this.counterSettingsForm.patchValue({
      plusCount: Math.max(
        0,
        this.counterSettingsForm.get('plusCount').value
      )
    });
  }
}

