import { TestBed } from '@angular/core/testing';

import { AnalyticsItemService } from './analytics-item.service';

describe('AnalyticsItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnalyticsItemService = TestBed.get(AnalyticsItemService);
    expect(service).toBeTruthy();
  });
});
