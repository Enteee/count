import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AppState } from '../models/app-state';
import { AppStateRepositoryService } from '../models/app-state-repository.service';

import { SettingsPage } from './settings.page';

describe('SettingsPage', () => {
  let component: SettingsPage;
  let fixture: ComponentFixture<SettingsPage>;
  let route: ActivatedRoute;
  let appState: AppState;
  let appStateRepositoryService: AppStateRepositoryService;

  beforeEach(async(() => {

    appState = new AppState();
    route = {
      snapshot: {
        data: {
          appState: appState,
        }
      }
    } as any;

    appStateRepositoryService = new AppStateRepositoryService(
      {} as any
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
        {provide: AppStateRepositoryService, useValue: appStateRepositoryService },
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
});
