import { TestBed } from '@angular/core/testing';

import { PastEventsService } from './past-events.service';

describe('PastEventsService', () => {
  let service: PastEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PastEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
