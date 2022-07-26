import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportePasajerosVueloComponent } from './reporte-pasajeros-vuelo.component';

describe('ReportePasajerosVueloComponent', () => {
  let component: ReportePasajerosVueloComponent;
  let fixture: ComponentFixture<ReportePasajerosVueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportePasajerosVueloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportePasajerosVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
