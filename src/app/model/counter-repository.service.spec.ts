import { TestBed } from '@angular/core/testing';

import { CounterRepositoryService } from './counter-repository.service';

describe('CounterRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CounterRepositoryService = TestBed.get(CounterRepositoryService);
    expect(service).toBeTruthy();
  });
});
