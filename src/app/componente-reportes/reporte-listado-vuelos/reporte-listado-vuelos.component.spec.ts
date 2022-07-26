import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteListadoVuelosComponent } from './reporte-listado-vuelos.component';

describe('ReporteListadoVuelosComponent', () => {
  let component: ReporteListadoVuelosComponent;
  let fixture: ComponentFixture<ReporteListadoVuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteListadoVuelosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteListadoVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
