import { Serialize, Deserialize } from 'cerialize';

import { Counter } from './counter';

describe('Counter', () => {
  let instance: Counter;

  beforeEach(() => {
    instance = new Counter();
  });

  it('should create an instance', () => {
    expect(instance).toBeTruthy();
  });

  it('should be equal after serialization', () => {
    const serializedInstance = Deserialize(Serialize(instance), Counter);
    expect(serializedInstance).toEqual(instance);
  });

});
