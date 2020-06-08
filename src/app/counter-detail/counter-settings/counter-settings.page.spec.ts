import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { IonicModule } from '@ionic/angular';

import { Counter } from '../../models/counter';
import { CounterRepositoryService } from '../../models/counter-repository.service';

import { CounterService } from '../../services/counter.service';

import { AppState } from '../../models/app-state';
import { AppStateService } from '../../services/app-state.service';

import { CounterSettingsPage } from './counter-settings.page';

describe('CounterSettingsPage', () => {
  let component: CounterSettingsPage;
  let fixture: ComponentFixture<CounterSettingsPage>;
  let router: Router;

  let counter: Counter;
  let activatedRoute: ActivatedRoute;
  let counterRepositoryService: CounterRepositoryService;
  let counterService: CounterService;
  let appState: AppState;
  let appStateService: AppStateService;

  beforeEach(async(() => {
    counter = new Counter();

    activatedRoute = {
      snapshot: {
        data: {
          counter,
        },
        paramMap: convertToParamMap({
          focusTitle: false,
        }),
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

    TestBed.configureTestingModule({
      imports: [
        IonicModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ CounterSettingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute },
        {provide: CounterRepositoryService, useValue: counterRepositoryService },
        {provide: CounterService, useValue: counterService },
        {provide: AppStateService, useValue: appStateService },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterSettingsPage);

    router = TestBed.inject(Router);
    spyOn(
      router,
      'navigate'
    );

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit', async(() => {
    spyOn(counterRepositoryService, 'save');

    component.submit();

    fixture.whenStable().then(() => {
      expect(counterRepositoryService.save).toHaveBeenCalledTimes(1);
      expect(counterRepositoryService.save).toHaveBeenCalledWith(counter);
    });
  }));

  it('should not submit if invalid', async(() => {
    spyOn(counterRepositoryService, 'save');

    const title = component.counterSettingsForm.controls.title;
    title.setValue('');

    component.submit();

    fixture.whenStable().then(() => {
      expect(counterRepositoryService.save).toHaveBeenCalledTimes(0);
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

  it('should check', async(() => {

    spyOn(
      component.counterSettingsForm,
      'patchValue',
    );

    component.check('testFormControl');

    fixture.whenStable().then(() => {
      expect(component.counterSettingsForm.patchValue).toHaveBeenCalledTimes(1);
      expect(component.counterSettingsForm.patchValue).toHaveBeenCalledWith({
        testFormControl: true
      });
    });
  }));

  it('should increment', async(() => {

    spyOn(
      component.counterSettingsForm,
      'get',
    ).and.returnValue({
      value: 0,
    } as any);

    spyOn(
      component.counterSettingsForm,
      'patchValue',
    );

    component.increment('testFormControl');

    fixture.whenStable().then(() => {
      expect(component.counterSettingsForm.get).toHaveBeenCalledTimes(1);
      expect(component.counterSettingsForm.get).toHaveBeenCalledWith('testFormControl');

      expect(component.counterSettingsForm.patchValue).toHaveBeenCalledTimes(1);
      expect(component.counterSettingsForm.patchValue).toHaveBeenCalledWith({
        testFormControl: 1
      });
    });
  }));

  it('should increment to zero on null', async(() => {

    spyOn(
      component.counterSettingsForm,
      'get',
    ).and.returnValue({
      value: null,
    } as any);

    spyOn(
      component.counterSettingsForm,
      'patchValue',
    );

    component.increment('testFormControl');

    fixture.whenStable().then(() => {
      expect(component.counterSettingsForm.get).toHaveBeenCalledTimes(1);
      expect(component.counterSettingsForm.get).toHaveBeenCalledWith('testFormControl');

      expect(component.counterSettingsForm.patchValue).toHaveBeenCalledTimes(1);
      expect(component.counterSettingsForm.patchValue).toHaveBeenCalledWith({
        testFormControl: 0
      });
    });
  }));


  it('should clamp using max', async(() => {

    spyOn(
      component.counterSettingsForm,
      'get',
    ).and.returnValue({
      value: 5
    } as any);

    spyOn(
      component.counterSettingsForm,
      'patchValue',
    );

    component.clamp(
      'testFormControl',
      10,
      'max',
    );

    fixture.whenStable().then(() => {
      expect(component.counterSettingsForm.get).toHaveBeenCalledTimes(1);
      expect(component.counterSettingsForm.get).toHaveBeenCalledWith('testFormControl');

      expect(component.counterSettingsForm.patchValue).toHaveBeenCalledTimes(1);
      expect(component.counterSettingsForm.patchValue).toHaveBeenCalledWith({
        testFormControl: 10
      });
    });
  }));

  it('should clamp using min', async(() => {

    spyOn(
      component.counterSettingsForm,
      'get',
    ).and.returnValue({
      value: 5
    } as any);

    spyOn(
      component.counterSettingsForm,
      'patchValue',
    );

    component.clamp(
      'testFormControl',
      10,
      'min',
    );

    fixture.whenStable().then(() => {
      expect(component.counterSettingsForm.get).toHaveBeenCalledTimes(1);
      expect(component.counterSettingsForm.get).toHaveBeenCalledWith('testFormControl');

      expect(component.counterSettingsForm.patchValue).toHaveBeenCalledTimes(1);
      expect(component.counterSettingsForm.patchValue).toHaveBeenCalledWith({
        testFormControl: 5
      });
    });
  }));

  it('should not clamp on null', async(() => {

    spyOn(
      component.counterSettingsForm,
      'get',
    ).and.returnValue({
      value: null,
    } as any);

    spyOn(
      component.counterSettingsForm,
      'patchValue',
    );

    component.clamp('testFormControl');

    fixture.whenStable().then(() => {
      expect(component.counterSettingsForm.get).toHaveBeenCalledTimes(1);
      expect(component.counterSettingsForm.get).toHaveBeenCalledWith('testFormControl');

      expect(component.counterSettingsForm.patchValue).toHaveBeenCalledTimes(0);
    });
  }));

});
