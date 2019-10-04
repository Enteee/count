import { TestBed } from '@angular/core/testing';

import { AppStateService } from './app-state.service';

describe('AppStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppStateService = TestBed.get(AppStateService);
    expect(service).toBeTruthy();
  });
});
