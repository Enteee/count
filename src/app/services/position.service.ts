import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { AppState } from '../models/app-state';
import { AppStateService } from './app-state.service';

import { Position } from '../models/count-event';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(
    private appStateService: AppStateService,
    private geolocation: Geolocation,
  ) { }

  async getPosition(): Promise<Position> {
    let position = null;
    try {
      position = await this.geolocation.getCurrentPosition();
    } catch (e) {
      // TODO: should we log something to the user?...
    }
    return position;
  }
}
