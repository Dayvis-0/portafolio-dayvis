import { TestBed } from '@angular/core/testing';

import { SkillsCategoriesService } from './skills.categories.service';

describe('SkillCategory', () => {
  let service: SkillsCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
