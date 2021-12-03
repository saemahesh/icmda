import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideVocalComponent } from './guide-vocal.component';

describe('GuideVocalComponent', () => {
  let component: GuideVocalComponent;
  let fixture: ComponentFixture<GuideVocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideVocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideVocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
