import { Storage } from '@ionic/storage';
import { StorageMock } from './mocks/storage.mock.spec';

import { AppState } from './app-state';

import { AppStateRepositoryService } from './app-state-repository.service';

describe('AppStateRepositoryService', () => {
  let storage: Storage;
  let repositoryService: AppStateRepositoryService;

  beforeEach(() => {
    storage = StorageMock.instance();

    repositoryService = new AppStateRepositoryService(
      storage
    );
  });

  it('should be created', () => {
    expect(repositoryService).toBeTruthy();
  });

  it('can init', async () => {
    await repositoryService.init(AppState, 'AppState');
    expect(repositoryService.all.length).toEqual(1);
  });
});
