import { TestBed } from '@angular/core/testing';

import { AsesoriaService } from './asesoria.service';

describe('AsesoriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsesoriaService = TestBed.get(AsesoriaService);
    expect(service).toBeTruthy();
  });
});
