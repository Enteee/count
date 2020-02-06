import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonReorderGroup, PopoverController } from '@ionic/angular';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterService } from '../../services/counter.service';

import { CountersSettingsComponent } from './counters-settings.component';

describe('CountersSettingsComponent', () => {
  let component: CountersSettingsComponent;
  let fixture: ComponentFixture<CountersSettingsComponent>;
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
    spyOn(
      counterService,
      'addCounter'
    );

    component.addCounter();
    fixture.whenStable().then(() => {
      expect(counterService.addCounter).toHaveBeenCalledTimes(1);
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
