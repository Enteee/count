import { TestBed } from '@angular/core/testing';
import { AnalyticsItemRepositoryService } from '../models/analytics-item-repository.service';

import { AnalyticsItemService } from './analytics-item.service';

describe('AnalyticsItemService', () => {
  let service: AnalyticsItemService;
  let analyticsItemRepositoryService: AnalyticsItemRepositoryService;

  beforeEach(() => {
    analyticsItemRepositoryService = new AnalyticsItemRepositoryService(
      {} as any
    );
    service = new AnalyticsItemService(
      analyticsItemRepositoryService
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
