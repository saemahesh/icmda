import { TestBed } from '@angular/core/testing';

import { IdcardService } from './idcard.service';

describe('IdcardService', () => {
  let service: IdcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
