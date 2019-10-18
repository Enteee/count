import { Serialize, Deserialize } from 'cerialize';

import { AppState } from './app-state';

describe('AppState', () => {

  let instance: AppState;

  beforeEach(() => {
    instance = new AppState();
  });

  it('should create an instance', () => {
    expect(instance).toBeTruthy();
  });

  it('should be equal after serialization', () => {
    const serializedInstance = Deserialize(Serialize(instance), AppState);
    expect(serializedInstance).toEqual(instance);
  });
});
