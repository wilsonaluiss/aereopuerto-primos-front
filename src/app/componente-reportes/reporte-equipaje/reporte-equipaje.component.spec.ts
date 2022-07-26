import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteEquipajeComponent } from './reporte-equipaje.component';

describe('ReporteEquipajeComponent', () => {
  let component: ReporteEquipajeComponent;
  let fixture: ComponentFixture<ReporteEquipajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteEquipajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteEquipajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
