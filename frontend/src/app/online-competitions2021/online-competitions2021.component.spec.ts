import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCompetitions2021Component } from './online-competitions2021.component';

describe('OnlineCompetitions2021Component', () => {
  let component: OnlineCompetitions2021Component;
  let fixture: ComponentFixture<OnlineCompetitions2021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineCompetitions2021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineCompetitions2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
