import { TestBed } from '@angular/core/testing';

import { AnalyticsItemRepositoryService } from './analytics-item-repository.service';

describe('AnalyticsItemRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnalyticsItemRepositoryService = TestBed.get(AnalyticsItemRepositoryService);
    expect(service).toBeTruthy();
  });
});
