import { TestBed } from '@angular/core/testing';

import { KuchipudiEvent2021Service } from './kuchipudi-event2021.service';

describe('KuchipudiEvent2021Service', () => {
  let service: KuchipudiEvent2021Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KuchipudiEvent2021Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
