import { Serialize, Deserialize } from 'cerialize';

import { CountEvent } from './count-event';

const UUID = '89714bab-ccbc-45a5-afb2-91d1e7c809ff';

describe('CountEvent', () => {
  let instance: CountEvent;

  beforeEach(() => {
    instance = new CountEvent(
      UUID,
      0
    );
  });

  it('should create an instance', () => {
    expect(instance).toBeTruthy();
  });

  it('should be equal after serialization', () => {
    const serializedInstance = Deserialize(Serialize(instance), CountEvent);
    expect(serializedInstance).toEqual(instance);
  });
});
