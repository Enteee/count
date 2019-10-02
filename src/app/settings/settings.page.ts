import { Component, OnInit } from '@angular/core';

import { AppState } from '../model/app-state';
import { AppStateService } from '../model/app-state.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private appStateService: AppStateService
  ) { }

  ngOnInit() {
  }

}
