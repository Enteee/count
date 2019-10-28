import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormControlName } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AppState, UpdateChannel } from '../models/app-state';
import { AppStateService } from '../services/app-state.service';

import { SettingsPage } from './settings.page';

describe('SettingsPage', () => {
  let component: SettingsPage;
  let fixture: ComponentFixture<SettingsPage>;
  let route: ActivatedRoute;
  let appState: AppState;
  let appStateService: AppStateService;

  beforeEach(async(() => {

    appState = new AppState();
    route = {
      snapshot: {
        data: {
          appState,
        }
      }
    } as any;

    appStateService = new AppStateService(
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
});
