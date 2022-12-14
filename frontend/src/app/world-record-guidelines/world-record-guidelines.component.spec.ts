import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldRecordGuidelinesComponent } from './world-record-guidelines.component';

describe('WorldRecordGuidelinesComponent', () => {
  let component: WorldRecordGuidelinesComponent;
  let fixture: ComponentFixture<WorldRecordGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldRecordGuidelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldRecordGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
