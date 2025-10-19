import { TestBed } from '@angular/core/testing';

import { AboutHighlightsService } from './about.highlights.service';

describe('AboutHighlights', () => {
  let service: AboutHighlightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutHighlightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
