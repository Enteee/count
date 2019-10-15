import { CountEvent } from './count-event';
import { Serialize, Deserialize } from 'cerialize';

const UUID = '89714bab-ccbc-45a5-afb2-91d1e7c809ff';

fdescribe('CountEvent', () => {
  let instance: CountEvent;

  beforeEach(() => {
    instance = new CountEvent(
      UUID,
      0
    );
  });

  it('should create a count-event', () => {
    expect(instance).toBeTruthy();
  });

  it('should be equal after serialization', () => {
    const serializedInstance = Deserialize(Serialize(instance), CountEvent);
    expect(serializedInstance).toEqual(instance)
  });
});
