import { TestBed } from '@angular/core/testing';

import { TearchersDataService } from './tearchers-data.service';

describe('TearchersDataService', () => {
  let service: TearchersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TearchersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
