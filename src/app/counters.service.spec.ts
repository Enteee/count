import { TestBed } from '@angular/core/testing';

import { CountersService } from './counters.service';

describe('CountersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountersService = TestBed.get(CountersService);
    expect(service).toBeTruthy();
  });
});
