import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { AppStateRepositoryService } from '../models/app-state-repository.service';

import { Position } from '../models/count-event';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(
    private appStateRepositoryService: AppStateRepositoryService,
    private geolocation: Geolocation,
  ) { }

  async getPosition(): Promise<Position> {
    let position = null;
    if (this.appStateRepositoryService.state.recordPosition) {
      position = await this.geolocation.getCurrentPosition();
    }
    return position;
  }

}
