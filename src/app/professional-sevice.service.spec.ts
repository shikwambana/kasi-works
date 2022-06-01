import { TestBed } from '@angular/core/testing';

import { ProfessionalSeviceService } from './professional-sevice.service';

describe('ProfessionalSeviceService', () => {
  let service: ProfessionalSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessionalSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
