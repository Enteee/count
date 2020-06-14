import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { AppState } from '../models/app-state';
import { AppStateService } from '../services/app-state.service';

import { ContributorService } from '../services/contributor.service';

import { ContributePage } from './contribute.page';

describe('ContributePage', () => {
  let component: ContributePage;
  let fixture: ComponentFixture<ContributePage>;
  let httpClient: HttpClient;
  let iab: InAppBrowser;
  let emailComposer: EmailComposer;
  let contributorService: ContributorService;
  let appStateService: AppStateService;
  let appState: AppState;

  beforeEach(async(() => {

    httpClient = {} as any;

    iab = {
      create: () => {},
    } as any;
    spyOn(
      iab,
      'create',
    );

    appState = new AppState();
    appStateService = new AppStateService(
      {} as any,
      {} as any,
      {} as any
    );

    spyOnProperty(
      appStateService,
      'appState'
    ).and.returnValue(appState);

    emailComposer = {} as any;

    contributorService = new ContributorService();

    TestBed.configureTestingModule({
      declarations: [ ContributePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: HttpClient, useValue: httpClient },
        { provide: EmailComposer, useValue: emailComposer },
        { provide: InAppBrowser, useValue: iab },
        { provide: AppStateService, useValue: appStateService },
        { provide: ContributorService, useValue: contributorService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('openBrowser should open a browser', () => {
    const url = 'https://just.a.random.url.com.local';

    component.openBrowser(url);

    expect(iab.create).toHaveBeenCalledTimes(1);
    expect(iab.create).toHaveBeenCalledWith(url);
  });
});
