import { CounterRepositoryService } from './counter-repository.service';

describe('CounterRepositoryService', () => {
  let repositoryService: CounterRepositoryService;

  beforeEach(() => {
    repositoryService = new CounterRepositoryService(
      {} as any
    );
  });

  it('should be created', () => {
    expect(repositoryService).toBeTruthy();
  });
});
