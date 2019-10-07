import { TestBed } from '@angular/core/testing';

import { CounterAnalyticsService } from './counter-analytics.service';

describe('CounterAnalyticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CounterAnalyticsService = TestBed.get(CounterAnalyticsService);
    expect(service).toBeTruthy();
  });
});
