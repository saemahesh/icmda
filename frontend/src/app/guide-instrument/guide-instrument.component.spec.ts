import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideInstrumentComponent } from './guide-instrument.component';

describe('GuideInstrumentComponent', () => {
  let component: GuideInstrumentComponent;
  let fixture: ComponentFixture<GuideInstrumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideInstrumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
