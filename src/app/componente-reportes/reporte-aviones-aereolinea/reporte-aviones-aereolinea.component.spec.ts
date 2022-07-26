import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteAvionesAereolineaComponent } from './reporte-aviones-aereolinea.component';

describe('ReporteAvionesAereolineaComponent', () => {
  let component: ReporteAvionesAereolineaComponent;
  let fixture: ComponentFixture<ReporteAvionesAereolineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteAvionesAereolineaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteAvionesAereolineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
