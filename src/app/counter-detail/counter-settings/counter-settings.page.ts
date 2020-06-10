import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { HasUnsavedChanges } from '../../guards/unsaved-changes/unsaved-changes.guard';

import { Counter } from '../../models/counter';
import { CounterRepositoryService } from '../../models/counter-repository.service';
import { CounterService } from '../../services/counter.service';

import { AppState } from '../../models/app-state';
import { AppStateService } from '../../services/app-state.service';

type ClampFunction = 'max' | 'min';

@Component({
  selector: 'app-counter-settings',
  templateUrl: './counter-settings.page.html',
  styleUrls: ['./counter-settings.page.scss'],
})
export class CounterSettingsPage implements OnInit, AfterViewInit, HasUnsavedChanges {

  counter: Counter;
  appState: AppState;
  counterSettingsForm: FormGroup;
  @ViewChild('titleInput', {static: true}) titleElement;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private counterRepositoryService: CounterRepositoryService,
    private counterService: CounterService,
    private appStateService: AppStateService,
  ) {}

  ngOnInit() {
    this.counter = this.route.snapshot.data.counter;
    this.appState = this.appStateService.appState;

    // enable disable input boxed based on checkbox
    // TODO: this should become a component
    const positiveLimit = new FormControl(
      this.counter.positiveLimit,
      [
        Validators.min(1)
      ]
    );
    const positiveLimitActive = new FormControl(
      this.counter.positiveLimitActive,
      [
      ]
    );
    const negativeLimit = new FormControl(
      -this.counter.negativeLimit,
      [
        Validators.min(1)
      ]
    );
    const negativeLimitActive = new FormControl(
      this.counter.negativeLimitActive,
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
      positiveLimit,
      positiveLimitActive,
      negativeLimit,
      negativeLimitActive,
      vibrate : new FormControl(
        this.counter.vibrate,
      ),
      locked : new FormControl(
        this.counter.locked,
      ),
    });

  }

  async ngAfterViewInit() {
    const focusTitle = this.route.snapshot.paramMap.get('focusTitle');
    if (focusTitle) {
      /*
       * TODO: Wohaaa this is ugly, but seems to be the only working solution..
       * cmon angular, implement this focus on element ref thing already!
       *
       * Discussion on ionic discourse:
       * https://forum.ionicframework.com/t/setting-focus-to-an-input-in-ionic/62789/56
       * Angular pull request:
       * https://github.com/angular/angular/issues/31133
       */
      setTimeout(async () => {
        await this.titleElement.setFocus();
        this.counterSettingsForm.patchValue({
          title: '',
        });
      }, 200);
    }
  }

  async submit() {

    // only submit if valid
    if (!this.counterSettingsForm.valid) {
      return;
    }

    this.counterSettingsForm.value.minusCount = -this.counterSettingsForm.value.minusCount;
    this.counterSettingsForm.value.negativeLimit = -this.counterSettingsForm.value.negativeLimit;

    await this.counterRepositoryService.save(
      Object.assign(
        this.counter,
        this.counterSettingsForm.value
      )
    );
  }

  hasUnsavedChanges(): boolean {
    return !this.counterSettingsForm.valid;
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

