import { TestBed } from '@angular/core/testing';

import { SkillsCategorysService } from './skills.categorys.service';

describe('SkillCategory', () => {
  let service: SkillsCategorysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsCategorysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
