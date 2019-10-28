import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AppState, UpdateChannel } from '../models/app-state';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  settingsForm: FormGroup;
  appState: AppState;
  deployConfiguration: Promise<object>;

  updateChannels = Object.keys(UpdateChannel);

  constructor(
    private route: ActivatedRoute,
    private appStateService: AppStateService,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
    this.appState = this.route.snapshot.data.appState as AppState;

    this.settingsForm = new FormGroup({
      recordPosition: new FormControl(
        this.appState.recordPosition,
        [
        ]
      ),
      disableNotImplemented: new FormControl(
        this.appState.disableNotImplemented,
        [
        ]
      ),
      updateChannel: new FormControl(
        this.appState.updateChannel,
        [
        ]
      ),
    });
  }

  async changeRecordPosition() {
    try {
      await this.appStateService.setRecordPosition(
        this.settingsForm.value.recordPosition
      );
    } catch (e) {
      const alert = await this.alertController.create({
        header: 'Failed to enable position recording',
        message: e.message,
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  async changeDisableNotImplemented() {
    this.appStateService.setDisableNotImplemented(
      this.settingsForm.value.disableNotImplemented
    );
  }

  async changeUpdateChannel() {
    await this.appStateService.setUpdateChannel(
      this.settingsForm.value.updateChannel
    );
    await this.appStateService.update('auto');
  }
}
