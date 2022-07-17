import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyCompetitionsMainComponent } from './monthly-competitions-main.component';

describe('MonthlyCompetitionsMainComponent', () => {
  let component: MonthlyCompetitionsMainComponent;
  let fixture: ComponentFixture<MonthlyCompetitionsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyCompetitionsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyCompetitionsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
