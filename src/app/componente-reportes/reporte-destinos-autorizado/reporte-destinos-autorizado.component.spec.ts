import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDestinosAutorizadoComponent } from './reporte-destinos-autorizado.component';

describe('ReporteDestinosAutorizadoComponent', () => {
  let component: ReporteDestinosAutorizadoComponent;
  let fixture: ComponentFixture<ReporteDestinosAutorizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteDestinosAutorizadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteDestinosAutorizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
