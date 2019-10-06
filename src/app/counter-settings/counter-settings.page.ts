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
      {
        value: this.counter.positiveWrapAround,
        disabled: !this.counter.positiveWrapAroundActive,
      },
      [
        Validators.min(1)
      ]
    );
    const positiveWrapAroundActive = new FormControl(
      this.counter.positiveWrapAroundActive,
      [
      ]
    );
    // enable disable input boxed based on checkbox
    positiveWrapAroundActive.valueChanges.subscribe(
      enabled => {
        if (enabled) {
          positiveWrapAround.enable();
        } else {
          positiveWrapAround.disable();
        }
      }
    );
    const negativeWrapAround = new FormControl(
      {
        value: -this.counter.negativeWrapAround,
        disabled: !this.counter.negativeWrapAroundActive,
      },
      [
        Validators.min(1)
      ]
    );
    const negativeWrapAroundActive = new FormControl(
      this.counter.negativeWrapAroundActive,
      [
      ]
    );
    // enable disable input boxed based on checkbox
    negativeWrapAroundActive.valueChanges.subscribe(
      enabled => {
        if (enabled) {
          negativeWrapAround.enable();
        } else {
          negativeWrapAround.disable();
        }
      }
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

  async discard() {
    this.navController.pop();
  }

  async reset() {
    await this.counterService.reset(this.counter);
    this.navController.pop();
  }

  async setLocked(locked:boolean) {
    await this.counterService.setLocked(
      this.counter,
      !this.counter.locked
    );
    this.navController.pop();
  }

  clamp(
    formControlName: string,
    clampValue: number = 0,
    clampFunction = ('max' as ClampFunction),
  ) {
    const value = this.counterSettingsForm.get(formControlName).value;
    if (value) {
      this.counterSettingsForm.patchValue({
        [formControlName]: Math[clampFunction](clampValue, value)
      });
    }
  }
}

