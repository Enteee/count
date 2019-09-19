import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotImplementedComponent } from './not-implemented.component';

describe('NotImplementedComponent', () => {
  let component: NotImplementedComponent;
  let fixture: ComponentFixture<NotImplementedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotImplementedComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotImplementedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
