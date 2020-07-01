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
    this.appState = this.route.snapshot.data.appState;

    this.settingsForm = new FormGroup({
      swipeCounting: new FormControl(
        this.appState.swipeCounting,
        [
        ]
      ),
      vibrate: new FormControl(
        this.appState.vibrate,
        [
        ]
      ),
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
      developmentMode: new FormControl(
        this.appState.developmentMode,
        [
        ]
      ),
    });
  }

  async changeSwipeCounting() {
    await this.appStateService.setSwipeCounting(
      this.settingsForm.value.swipeCounting
    );
  }

  async changeVibrate() {
    await this.appStateService.setVibrate(
      this.settingsForm.value.vibrate
    );
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

  async changeDevelopmentMode() {
    this.appStateService.setDevelopmentMode(
      this.settingsForm.value.developmentMode
    );
  }
}
