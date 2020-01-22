import { Injectable } from '@angular/core';

import { AnalyticsItem } from '../models/analytics-item';
import { AnalyticsItemRepositoryService } from '../models/analytics-item-repository.service';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsItemService {

  constructor(
    private analyticsItemRepositoryService: AnalyticsItemRepositoryService,
  ) { }

  get all(): Array<AnalyticsItem> {
    return this.analyticsItemRepositoryService.all;
  }

}
