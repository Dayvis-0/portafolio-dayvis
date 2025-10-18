import { TestBed } from '@angular/core/testing';

import { AboutHighlights } from './about-highlights';

describe('AboutHighlights', () => {
  let service: AboutHighlights;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutHighlights);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
