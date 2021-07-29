import { TestBed } from '@angular/core/testing';

import { UploadWinningsService } from './upload-winnings.service';

describe('UploadWinningsService', () => {
  let service: UploadWinningsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadWinningsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
