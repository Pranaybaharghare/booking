/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GroundsComponent } from './Grounds.component';

describe('GroundsComponent', () => {
  let component: GroundsComponent;
  let fixture: ComponentFixture<GroundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
