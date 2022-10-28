/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AsientosService } from './asientos.service';

describe('Service: Asientos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsientosService]
    });
  });

  it('should ...', inject([AsientosService], (service: AsientosService) => {
    expect(service).toBeTruthy();
  }));
});
