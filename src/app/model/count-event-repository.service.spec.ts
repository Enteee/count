import { TestBed } from '@angular/core/testing';

import { CountEventRepositoryService } from './count-event-repository.service';

describe('CountEventRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountEventRepositoryService = TestBed.get(CountEventRepositoryService);
    expect(service).toBeTruthy();
  });
});
