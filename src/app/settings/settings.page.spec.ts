import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormControlName } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, AlertController } from '@ionic/angular';

import { AppState, UpdateChannel } from '../models/app-state';
import { AppStateService } from '../services/app-state.service';

import { SettingsPage } from './settings.page';

describe('SettingsPage', () => {
  let component: SettingsPage;
  let fixture: ComponentFixture<SettingsPage>;
  let route: ActivatedRoute;

  let appState: AppState;
  let appStateService: AppStateService;

  let alertMock;
  let alertController: AlertController;

  beforeEach(async(() => {

    appState = new AppState();
    route = {
      snapshot: {
        data: {
          appState,
        }
      }
    } as any;

    alertMock = {
      present: () => {},
    } as any;
    spyOn(
      alertMock,
      'present',
    );

    alertController = {
      create: () => {},
    } as any;
    spyOn(
      alertController,
      'create',
    ).and.returnValue(alertMock);

    appStateService = new AppStateService(
      {} as any,
      {} as any,
      {} as any,
    );

    TestBed.configureTestingModule({
      imports: [
        IonicModule,
        ReactiveFormsModule,
      ],
      declarations: [
        SettingsPage
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: ActivatedRoute, useValue: route },
        {provide: AppStateService, useValue: appStateService },
        {provide: AlertController, useValue: alertController },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change disable not implemented', async(() => {
    spyOn(
      appStateService,
      'setDisableNotImplemented'
    );

    component.settingsForm.patchValue({
      disableNotImplemented: true,
    });
    component.changeDisableNotImplemented();

    fixture.whenStable().then(() => {
      expect(appStateService.setDisableNotImplemented).toHaveBeenCalledTimes(1);
      expect(appStateService.setDisableNotImplemented).toHaveBeenCalledWith(true);
    });
  }));

  it('should change swipeCounting', async(() => {
    spyOn(
      appStateService,
      'setSwipeCounting'
    );

    component.settingsForm.patchValue({
      swipeCounting: true,
    });
    component.changeSwipeCounting();

    fixture.whenStable().then(() => {
      expect(appStateService.setSwipeCounting).toHaveBeenCalledTimes(1);
      expect(appStateService.setSwipeCounting).toHaveBeenCalledWith(true);
    });
  }));

  it('should change vibrate', async(() => {
    spyOn(
      appStateService,
      'setVibrate'
    );

    component.settingsForm.patchValue({
      vibrate: true,
    });
    component.changeVibrate();

    fixture.whenStable().then(() => {
      expect(appStateService.setVibrate).toHaveBeenCalledTimes(1);
      expect(appStateService.setVibrate).toHaveBeenCalledWith(true);
    });
  }));

  it('should change record position', async(() => {
    spyOn(
      appStateService,
      'setRecordPosition'
    );

    component.settingsForm.patchValue({
      recordPosition: true,
    });
    component.changeRecordPosition();

    fixture.whenStable().then(() => {
      expect(appStateService.setRecordPosition).toHaveBeenCalledTimes(1);
      expect(appStateService.setRecordPosition).toHaveBeenCalledWith(true);
    });
  }));

  it('should print alert when change record position fails', async(() => {
    spyOn(
      appStateService,
      'setRecordPosition'
    ).and.throwError('nope');

    component.settingsForm.patchValue({
      recordPosition: true,
    });
    component.changeRecordPosition();

    fixture.whenStable().then(() => {
      expect(appStateService.setRecordPosition).toHaveBeenCalledTimes(1);
      expect(appStateService.setRecordPosition).toHaveBeenCalledWith(true);

      expect(alertController.create).toHaveBeenCalledTimes(1);
      expect(alertMock.present).toHaveBeenCalledTimes(1);
    });
  }));

  it('should change update channel and update', async(() => {
    spyOn(
      appStateService,
      'setUpdateChannel'
    );
    spyOn(
      appStateService,
      'update'
    );

    component.settingsForm.patchValue({
      updateChannel: UpdateChannel.Master
    });
    component.changeUpdateChannel();

    fixture.whenStable().then(() => {
      expect(appStateService.setUpdateChannel).toHaveBeenCalledTimes(1);
      expect(appStateService.setUpdateChannel).toHaveBeenCalledWith(
        UpdateChannel.Master
      );

      expect(appStateService.update).toHaveBeenCalledTimes(1);
      expect(appStateService.update).toHaveBeenCalledWith(
        'auto'
      );
    });
  }));

  it('should change development mode', async(() => {
    spyOn(
      appStateService,
      'setDevelopmentMode'
    );

    component.settingsForm.patchValue({
      developmentMode: true,
    });
    component.changeDevelopmentMode()

    fixture.whenStable().then(() => {
      expect(appStateService.setDevelopmentMode).toHaveBeenCalledTimes(1);
      expect(appStateService.setDevelopmentMode).toHaveBeenCalledWith(true);
    });
  }));
});
