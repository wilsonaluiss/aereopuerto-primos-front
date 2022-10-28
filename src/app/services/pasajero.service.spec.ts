/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PasajeroService } from './pasajero.service';

describe('Service: Pasajero', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasajeroService]
    });
  });

  it('should ...', inject([PasajeroService], (service: PasajeroService) => {
    expect(service).toBeTruthy();
  }));
});
