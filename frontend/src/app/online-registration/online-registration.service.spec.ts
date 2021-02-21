import { TestBed } from '@angular/core/testing';

import { OnlineRegistrationService } from './online-registration.service';

describe('OnlineRegistrationService', () => {
  let service: OnlineRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
