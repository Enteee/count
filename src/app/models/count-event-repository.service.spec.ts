import { CountEventRepositoryService } from './count-event-repository.service';

describe('CountEventRepositoryService', () => {
  let repositoryService: CountEventRepositoryService;

  beforeEach(() => {
    repositoryService = new CountEventRepositoryService(
      {} as any
    );
  });

  it('should be created', () => {
    expect(repositoryService).toBeTruthy();
  });
});
