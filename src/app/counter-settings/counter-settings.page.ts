import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { NavController } from '@ionic/angular';

import { Counter } from '../models/counter';
import { CounterRepositoryService } from '../models/counter-repository.service';

import { CounterService } from '../services/counter.service';

type ClampFunction = 'max' | 'min';

@Component({
  selector: 'app-counter-settings',
  templateUrl: './counter-settings.page.html',
  styleUrls: ['./counter-settings.page.scss'],
})
export class CounterSettingsPage implements OnInit {

  counter: Counter;
  counterSettingsForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private counterRepositoryService: CounterRepositoryService,
    private counterService: CounterService,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.counter = this.route.snapshot.data.counter;

    // enable disable input boxed based on checkbox
    // TODO: this should become a component
    const positiveWrapAround = new FormControl(
      this.counter.positiveWrapAround,
      [
        Validators.min(1)
      ]
    );
    const positiveWrapAroundActive = new FormControl(
      this.counter.positiveWrapAroundActive,
      [
      ]
    );
    const negativeWrapAround = new FormControl(
      -this.counter.negativeWrapAround,
      [
        Validators.min(1)
      ]
    );
    const negativeWrapAroundActive = new FormControl(
      this.counter.negativeWrapAroundActive,
      [
      ]
    );

    this.counterSettingsForm = new FormGroup({
      title : new FormControl(
        this.counter.title,
        [
        ]
      ),
      plusCount : new FormControl(
        this.counter.plusCount,
        [
          Validators.min(0)
        ]
      ),
      minusCount : new FormControl(
        -this.counter.minusCount,
        [
          Validators.min(0)
        ]
      ),
      positiveWrapAround,
      positiveWrapAroundActive,
      negativeWrapAround,
      negativeWrapAroundActive,
      vibrate : new FormControl(
        this.counter.vibrate,
      ),
      locked : new FormControl(
        this.counter.locked,
      ),
    });
  }

  async submit() {
    this.counterSettingsForm.value.minusCount = -this.counterSettingsForm.value.minusCount;
    this.counterSettingsForm.value.negativeWrapAround = -this.counterSettingsForm.value.negativeWrapAround;

    await this.counterRepositoryService.save(
      Object.assign(
        this.counter,
        this.counterSettingsForm.value
      )
    );
    this.navController.pop();
  }

  async reset() {
    await this.counterService.reset(this.counter);
    this.navController.pop();
  }

  check(
    formControlName: string,
  ) {
    this.counterSettingsForm.patchValue({
      [formControlName]: true,
    });
  }

  increment(
    formControlName: string,
  ) {
    let value = this.counterSettingsForm.get(formControlName).value;
    if (value === null) {
      value = -1;
    }
    this.counterSettingsForm.patchValue({
      [formControlName]: value + 1,
    });
  }


  clamp(
    formControlName: string,
    clampValue: number = 0,
    clampFunction = ('max' as ClampFunction),
  ) {
    const value = this.counterSettingsForm.get(formControlName).value;
    if (value !== null) {
      this.counterSettingsForm.patchValue({
        [formControlName]: Math[clampFunction](clampValue, value)
      });
    }
  }
}

