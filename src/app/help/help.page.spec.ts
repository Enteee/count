import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Deploy } from 'cordova-plugin-ionic/dist/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { ContributorService } from '../services/contributor.service';

import { HelpPage } from './help.page';

describe('HelpPage', () => {
  let component: HelpPage;
  let fixture: ComponentFixture<HelpPage>;
  let deploy: Deploy;
  let iab: InAppBrowser;
  let contributorService: ContributorService;

  beforeEach(async(() => {

    deploy = {
      getConfiguration: () => {},
    } as any;
    spyOn(
      deploy,
      'getConfiguration'
    );

    iab = {
      create: () => {},
    } as any;
    spyOn(
      iab,
      'create'
    );

    contributorService = new ContributorService();

    TestBed.configureTestingModule({
      declarations: [ HelpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: Deploy, useValue: deploy },
        { provide: InAppBrowser, useValue: iab },
        { provide: ContributorService, useValue: contributorService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('openBrowser opens default url', () => {

    component.openBrowser();

    expect(iab.create).toHaveBeenCalledTimes(1);
    expect(iab.create).toHaveBeenCalledWith(
      `${HelpPage.GITHUB_URL}/${HelpPage.PROJECT_NAME}/contributors`
    );
  });
});
