import { NotImplemented } from './not-implemented';

describe('NotImplemented', () => {
  it('should create an instance', () => {
    expect(new NotImplemented(
      {} as any,
      {} as any,
      {} as any,
      {} as any,
    )).toBeTruthy();
  });
});
