import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadWinningsComponent } from './upload-winnings.component';

describe('UploadWinningsComponent', () => {
  let component: UploadWinningsComponent;
  let fixture: ComponentFixture<UploadWinningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadWinningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadWinningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
