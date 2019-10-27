import { Model } from './model';
import { ModelRepositoryService } from './model-repository.service';

describe('ModelRepositoryService', () => {
  let repositoryService: ModelRepositoryService<Model>;

  beforeEach(() => {
    repositoryService = new ModelRepositoryService<Model>(
      {} as any
    );
  });

  it('should be created', () => {
    expect(repositoryService).toBeTruthy();
  });
});
