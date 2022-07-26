import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUsuarioPasajeroComponent } from './crear-usuario-pasajero.component';

describe('CrearUsuarioPasajeroComponent', () => {
  let component: CrearUsuarioPasajeroComponent;
  let fixture: ComponentFixture<CrearUsuarioPasajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearUsuarioPasajeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearUsuarioPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
