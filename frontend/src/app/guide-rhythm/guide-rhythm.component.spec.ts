import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideRhythmComponent } from './guide-rhythm.component';

describe('GuideRhythmComponent', () => {
  let component: GuideRhythmComponent;
  let fixture: ComponentFixture<GuideRhythmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideRhythmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideRhythmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
