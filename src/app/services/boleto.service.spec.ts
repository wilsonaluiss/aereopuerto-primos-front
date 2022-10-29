/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BoletoService } from './boleto.service';

describe('Service: Boleto', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoletoService]
    });
  });

  it('should ...', inject([BoletoService], (service: BoletoService) => {
    expect(service).toBeTruthy();
  }));
});
