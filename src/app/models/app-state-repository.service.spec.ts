import { AppStateRepositoryService } from './app-state-repository.service';

describe('AppStateRepositoryService', () => {
  let repositoryService: AppStateRepositoryService;

  beforeEach(() => {
    repositoryService = new AppStateRepositoryService(
      {} as any
    );
  });

  it('should be created', () => {
    expect(repositoryService).toBeTruthy();
  });
});
