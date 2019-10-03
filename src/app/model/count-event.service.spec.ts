import { TestBed } from '@angular/core/testing';

import { CountEventService } from './count-event.service';

describe('CountEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountEventService = TestBed.get(CountEventService);
    expect(service).toBeTruthy();
  });
});
