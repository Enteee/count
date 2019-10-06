import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AppState } from '../models/app-state';
import { AppStateRepositoryService } from '../models/app-state-repository.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  private appState: AppState;
  private settingsForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private appStateRepositoryService: AppStateRepositoryService,
  ) {
  }

  ngOnInit() {
    this.appState = this.route.snapshot.data.appState;

    this.settingsForm = new FormGroup({
      disableNotImplemented: new FormControl(
        this.appState.disableNotImplemented,
        [
        ]
      ),
    });
  }

  async submit() {
    await this.appStateRepositoryService.save(
      Object.assign(
        this.appState,
        this.settingsForm.value
      )
    );
  }

}
