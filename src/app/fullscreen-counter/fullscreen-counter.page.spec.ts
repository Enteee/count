import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenCounterPage } from './fullscreen-counter.page';

describe('FullscreenCounterPage', () => {
  let component: FullscreenCounterPage;
  let fixture: ComponentFixture<FullscreenCounterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullscreenCounterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullscreenCounterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
