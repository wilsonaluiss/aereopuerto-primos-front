/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VueloService } from './vuelo.service';

describe('Service: Vuelo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VueloService]
    });
  });

  it('should ...', inject([VueloService], (service: VueloService) => {
    expect(service).toBeTruthy();
  }));
});
