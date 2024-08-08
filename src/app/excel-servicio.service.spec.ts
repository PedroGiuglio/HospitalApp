import { TestBed } from '@angular/core/testing';

import { ExcelServicioService } from './excel-servicio.service';

describe('ExcelServicioService', () => {
  let service: ExcelServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcelServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
