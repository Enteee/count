import { TestBed } from '@angular/core/testing';

import { CounterAnalyticsService } from './counter-analytics.service';
import { CountEventRepositoryService } from '../models/count-event-repository.service';

describe('CounterAnalyticsService', () => {
  let countEventRepositoryService: CountEventRepositoryService;
  let service: CounterAnalyticsService;

  beforeEach(() => {
    countEventRepositoryService = new CountEventRepositoryService(
      {} as any
    );

    service = new CounterAnalyticsService(countEventRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
