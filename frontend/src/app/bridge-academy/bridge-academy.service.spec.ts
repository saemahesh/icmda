import { TestBed } from '@angular/core/testing';

import { BridgeAcademyService } from './bridge-academy.service';

describe('BridgeAcademyService', () => {
  let service: BridgeAcademyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BridgeAcademyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
