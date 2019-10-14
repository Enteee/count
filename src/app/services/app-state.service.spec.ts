import { TestBed } from '@angular/core/testing';
import { Storage } from '@ionic/storage';

import { AppStateService } from './app-state.service';

class MockStorage {}

describe('AppStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
        {
          provide: Storage,
          useClass: MockStorage
        }
    ]
  }));

  it('should be created', () => {
    const service: AppStateService = TestBed.get(AppStateService);
    expect(service).toBeTruthy();
  });
});
