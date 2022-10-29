/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VueloComponent } from './vuelo.component';

describe('VueloComponent', () => {
  let component: VueloComponent;
  let fixture: ComponentFixture<VueloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
