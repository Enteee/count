import { TestBed } from '@angular/core/testing';

import { Model } from './model';
import { ModelRepositoryService } from './model-repository.service';

describe('ModelRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    expect(new ModelRepositoryService<Model>(
      {} as any
    )).toBeTruthy();
  });
});
