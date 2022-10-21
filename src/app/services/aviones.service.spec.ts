/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AvionesService } from './aviones.service';

describe('Service: Aviones', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvionesService]
    });
  });

  it('should ...', inject([AvionesService], (service: AvionesService) => {
    expect(service).toBeTruthy();
  }));
});
