import { Injectable } from '@angular/core';

import { ModelService } from './model.service';
import { AppState } from './app-state';

@Injectable({
  providedIn: 'root'
})
export class AppStateService extends ModelService<AppState> {
}
