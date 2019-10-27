import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { AppStateService } from '../services/app-state.service';

import { NotImplementedModalPage } from './not-implemented-modal.page';

describe('NotImplementedModalPage', () => {
  let component: NotImplementedModalPage;
  let fixture: ComponentFixture<NotImplementedModalPage>;
  let modalController: ModalController;
  let inAppBrowser: InAppBrowser;
  let appStateService: AppStateService;

  beforeEach(async(() => {

    modalController = {} as any;

    inAppBrowser = {} as any;

    appStateService = {} as any;

    TestBed.configureTestingModule({
      declarations: [ NotImplementedModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: ModalController, useValue: modalController},
        {provide: InAppBrowser, useValue: inAppBrowser},
        {provide: AppStateService, useValue: appStateService},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotImplementedModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
