import { Serialize, Deserialize } from 'cerialize';

import { Model } from './model';

describe('Model', () => {
  let instance: Model;

  beforeEach(() => {
    instance = new Model();
  });

  it('should create an instance', () => {
    expect(instance).toBeTruthy();
  });

  it('should be equal after serialization', () => {
    const serializedInstance = Deserialize(Serialize(instance), Model);
    expect(serializedInstance).toEqual(instance);
  });

});
