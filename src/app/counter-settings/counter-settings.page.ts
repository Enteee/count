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

  counter: Counter;
  counterSettingsForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
    await this.counterService.save(
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
    this.counter.count = 0;
    // TODO: Should we add an instance here as well?
    await this.counterService.save(
      this.counter
    );
    this.navController.pop();
  }

  clampMin(formControlName: string, min: number = 0) {
    const value = this.counterSettingsForm.get(formControlName).value;
    if (value) {
      this.counterSettingsForm.patchValue({
        [formControlName]: Math.min(min, value)
      });
    }
  }

  clampMax(formControlName: string, max: number = 0) {
    const value = this.counterSettingsForm.get(formControlName).value;
    if (value) {
      this.counterSettingsForm.patchValue({
        [formControlName]: Math.max(max, value)
      });
    }
  }
}
