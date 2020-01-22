import { CounterAnalyticsDirective } from './counter-analytics.directive';

describe('CounterAnalyticsDirective', () => {
  it('should create an instance', () => {
    const directive = new CounterAnalyticsDirective({} as any);
    expect(directive).toBeTruthy();
  });
});
