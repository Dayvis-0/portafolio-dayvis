import { TestBed } from '@angular/core/testing';

import { AboutDescriptionService } from './about.description.service';

describe('AboutDescriptionService', () => {
  let service: AboutDescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutDescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
