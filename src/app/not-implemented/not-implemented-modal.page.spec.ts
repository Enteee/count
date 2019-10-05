import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotImplementedModalPage } from './not-implemented-modal.page';

describe('NotImplementedModalPage', () => {
  let component: NotImplementedModalPage;
  let fixture: ComponentFixture<NotImplementedModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotImplementedModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
