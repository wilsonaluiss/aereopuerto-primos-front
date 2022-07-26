import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteAereolineasComponent } from './reporte-aereolineas.component';

describe('ReporteAereolineasComponent', () => {
  let component: ReporteAereolineasComponent;
  let fixture: ComponentFixture<ReporteAereolineasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteAereolineasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteAereolineasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
