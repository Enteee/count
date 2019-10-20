import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Deploy } from 'cordova-plugin-ionic/dist/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { HelpPage } from './help.page';

describe('HelpPage', () => {
  let component: HelpPage;
  let fixture: ComponentFixture<HelpPage>;
  let deploy: Deploy;
  let iab: InAppBrowser;

  beforeEach(async(() => {

    deploy = {
      getConfiguration: () => {},
    } as any;
    spyOn(
      deploy,
      'getConfiguration'
    );

    iab = {} as InAppBrowser;

    TestBed.configureTestingModule({
      declarations: [ HelpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: Deploy, useValue: deploy },
        { provide: InAppBrowser, useValue: iab },
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
});
