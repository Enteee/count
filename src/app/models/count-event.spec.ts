import { CountEvent } from './count-event';

const UUID = '89714bab-ccbc-45a5-afb2-91d1e7c809ff';

describe('CountEvent', () => {
  it('should create an count-event', () => {
    expect(new CountEvent(
      UUID,
      0
    )).toBeTruthy();
  });
});
