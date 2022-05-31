import { TestBed } from '@angular/core/testing';

import { SkillsSeviceService } from './skills-sevice.service';

describe('SkillsSeviceService', () => {
  let service: SkillsSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
