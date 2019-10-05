import { TestBed } from '@angular/core/testing';

import { AppStateRepositoryService } from './app-state-repository.service';

describe('AppStateRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppStateRepositoryService = TestBed.get(AppStateRepositoryService);
    expect(service).toBeTruthy();
  });
});
