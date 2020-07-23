import { AnalyticsItem } from './analytics-item';
import { AnalyticsItemRepositoryService } from './analytics-item-repository.service';

describe('AnalyticsItemRepositoryService', () => {
  let repositoryService: AnalyticsItemRepositoryService;

  beforeEach(() => {
    repositoryService = new AnalyticsItemRepositoryService(
      {} as any,
    );
  });

  it('should be created', () => {
    expect(repositoryService).toBeTruthy();
  });

  it('can init', async () => {
    await repositoryService.init(AnalyticsItem, 'AnalyticsItem');
    expect(repositoryService.all.length).toBeGreaterThan(1);
  });
});
