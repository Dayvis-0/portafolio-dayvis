import { TestBed } from '@angular/core/testing';

import { SkillsService } from './skills.service';

describe('Skills', () => {
  let service: SkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
