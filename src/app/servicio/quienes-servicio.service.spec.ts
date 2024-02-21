import { TestBed } from '@angular/core/testing';

import { QuienesServicioService } from './quienes-servicio.service';

describe('QuienesServicioService', () => {
  let service: QuienesServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuienesServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
