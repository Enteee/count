import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonReorderGroup, PopoverController } from '@ionic/angular';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { Counter } from '../../models/counter';
import { CounterService } from '../../services/counter.service';

import { CountersSettingsComponent } from './counters-settings.component';

describe('CountersSettingsComponent', () => {
  let component: CountersSettingsComponent;
  let fixture: ComponentFixture<CountersSettingsComponent>;
  let router: Router;

  let counterService: CounterService;
  let popoverControllerSpy: PopoverController;
  let reorderGroupSpy: IonReorderGroup;

  beforeEach(async(() => {

    counterService = new CounterService(
      {} as any,
      {} as any,
      {} as any,
      {} as any,
      {} as any,
    );

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ CountersSettingsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: CounterService, useValue: counterService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountersSettingsComponent);
    component = fixture.componentInstance;

    router = TestBed.inject(Router);
    spyOn(
      router,
      'navigate'
    );

    popoverControllerSpy = jasmine.createSpyObj('popoverController', [
      'dismiss'
    ]);
    component.popoverController = popoverControllerSpy;

    reorderGroupSpy = jasmine.createSpyObj('reorderGroup', [
      'disabled'
    ]);
    component.reorderGroup = reorderGroupSpy;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can add a new counter', async(() => {
    const newCounter = new Counter();
    spyOn(
      counterService,
      'addCounter'
    ).and.returnValue(Promise.resolve(newCounter));

    component.addCounter();

    fixture.whenStable().then(() => {
      expect(counterService.addCounter).toHaveBeenCalledTimes(1);

      expect(router.navigate).toHaveBeenCalledTimes(1);
      expect(router.navigate).toHaveBeenCalledWith([
        '/counter-detail',
        newCounter.id,
        'settings',
        {
          focusTitle: true
        }
      ]);

      expect(popoverControllerSpy.dismiss).toHaveBeenCalledTimes(1);
    });
  }));

  it('can toggle reorder', async(() => {

    reorderGroupSpy.disabled = false;

    component.toggleReorder();
    fixture.whenStable().then(() => {
      expect(reorderGroupSpy.disabled).toEqual(true);
      expect(popoverControllerSpy.dismiss).toHaveBeenCalledTimes(1);
    });
  }));

});
