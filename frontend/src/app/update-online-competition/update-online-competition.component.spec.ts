import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOnlineCompetitionComponent } from './update-online-competition.component';

describe('UpdateOnlineCompetitionComponent', () => {
  let component: UpdateOnlineCompetitionComponent;
  let fixture: ComponentFixture<UpdateOnlineCompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOnlineCompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOnlineCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
