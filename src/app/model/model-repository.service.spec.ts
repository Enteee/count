import { TestBed } from '@angular/core/testing';

import { ModelRepositoryService } from './model-repository.service';

describe('ModelRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModelRepositoryService = TestBed.get(ModelRepositoryService);
    expect(service).toBeTruthy();
  });
});
