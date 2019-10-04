import { Component, OnInit } from '@angular/core';

import { AppState } from '../model/app-state';
import { AppStateRepositoryService } from '../model/app-state-repository.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private appStateRepositoryService: AppStateRepositoryService
  ) { }

  ngOnInit() {
  }

}
