import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicModule, NavController } from '@ionic/angular';

import { Counter } from '../models/counter';
import { CounterRepositoryService } from '../models/counter-repository.service';

import { CounterService } from '../services/counter.service';

import { AppState } from '../models/app-state';
import { AppStateService } from '../services/app-state.service';

import { CounterSettingsPage } from './counter-settings.page';

describe('CounterSettingsPage', () => {
  let component: CounterSettingsPage;
  let fixture: ComponentFixture<CounterSettingsPage>;

  let counter: Counter;
  let activatedRoute: ActivatedRoute;
  let counterRepositoryService: CounterRepositoryService;
  let counterService: CounterService;
  let navController: NavController;
  let appState: AppState;
  let appStateService: AppStateService;

  beforeEach(async(() => {
    counter = new Counter();
    activatedRoute = {
      snapshot: {
        data: {
          counter,
        },
      },
    } as any;

    counterRepositoryService = new CounterRepositoryService(
      {} as any
    );

    counterService = new CounterService(
      counterRepositoryService,
      {} as any,
      {} as any,
      {} as any,
    );

    appState = new AppState();
    appStateService = new AppStateService(
      {} as any,
      {} as any,
      {} as any,
    );
    spyOnProperty(
      appStateService,
      'appState',
    ).and.returnValue(appState);

    navController = jasmine.createSpyObj(
      'NavController',
      {
        pop: () => {},
      }
    );

    TestBed.configureTestingModule({
      imports: [
        IonicModule,
        ReactiveFormsModule,
      ],
      declarations: [ CounterSettingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute },
        {provide: CounterRepositoryService, useValue: counterRepositoryService },
        {provide: CounterService, useValue: counterService },
        {provide: AppStateService, useValue: appStateService },
        {provide: NavController, useValue: navController },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset', async(() => {
    spyOn(counterService, 'reset');

    component.reset();

    fixture.whenStable().then(() => {
      expect(counterService.reset).toHaveBeenCalledTimes(1);
      expect(counterService.reset).toHaveBeenCalledWith(counter);

      expect(navController.pop).toHaveBeenCalledTimes(1);
    });
  }));

  it('should hide vibration option if vibration is disabled in appstate', async(() => {
    const vibrateCheckbox = fixture.debugElement.nativeElement.querySelector('.vibrate-checkbox');
    appState.vibrate = false;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(vibrateCheckbox.hidden).toEqual(true);
    });
  }));


});
