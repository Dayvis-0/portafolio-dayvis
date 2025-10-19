import { TestBed } from '@angular/core/testing';

import { AcademicRegistryService } from './academic.registry.service';

describe('AcademicRegistryService', () => {
  let service: AcademicRegistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademicRegistryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
