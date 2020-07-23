import { Storage } from '@ionic/storage';
import { StorageMock } from './mocks/storage.mock.spec';
import { Model } from './model';
import { ModelRepositoryService } from './model-repository.service';

describe('ModelRepositoryService', () => {
  let storage: Storage;
  let repositoryService: ModelRepositoryService<Model>;

  beforeEach(() => {
    storage = StorageMock.instance();

    repositoryService = new ModelRepositoryService<Model>(
      storage
    );
  });

  it('should be created', () => {
    expect(repositoryService).toBeTruthy();
  });

  it('should throw error on MCtorName reuse', async () => {
    await repositoryService.init({} as any, 'Reuse');
    expectAsync(
      repositoryService.init({} as any, 'Reuse')
    ).toBeRejectedWithError();
  });

  it('should throw error on MCtorName prefix collision', async () => {
    await repositoryService.init({} as any, 'ABCD');
    expectAsync(
      repositoryService.init({} as any, 'ABC')
    ).toBeRejectedWithError();

    await repositoryService.init({} as any, 'DEF');
    expectAsync(
      repositoryService.init({} as any, 'DEFG')
    ).toBeRejectedWithError();

  });

});
