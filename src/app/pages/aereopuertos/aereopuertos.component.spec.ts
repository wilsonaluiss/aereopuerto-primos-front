import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AereopuertosComponent } from './aereopuertos.component';

describe('AereopuertosComponent', () => {
  let component: AereopuertosComponent;
  let fixture: ComponentFixture<AereopuertosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AereopuertosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AereopuertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
