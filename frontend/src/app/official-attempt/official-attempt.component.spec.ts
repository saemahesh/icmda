import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialAttemptComponent } from './official-attempt.component';

describe('OfficialAttemptComponent', () => {
  let component: OfficialAttemptComponent;
  let fixture: ComponentFixture<OfficialAttemptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficialAttemptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficialAttemptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
