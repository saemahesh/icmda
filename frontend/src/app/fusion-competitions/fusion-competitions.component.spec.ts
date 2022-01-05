import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionCompetitionsComponent } from './fusion-competitions.component';

describe('FusionCompetitionsComponent', () => {
  let component: FusionCompetitionsComponent;
  let fixture: ComponentFixture<FusionCompetitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FusionCompetitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FusionCompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
