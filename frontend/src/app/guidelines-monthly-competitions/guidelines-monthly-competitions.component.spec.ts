import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidelinesMonthlyCompetitionsComponent } from './guidelines-monthly-competitions.component';

describe('GuidelinesMonthlyCompetitionsComponent', () => {
  let component: GuidelinesMonthlyCompetitionsComponent;
  let fixture: ComponentFixture<GuidelinesMonthlyCompetitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidelinesMonthlyCompetitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidelinesMonthlyCompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
