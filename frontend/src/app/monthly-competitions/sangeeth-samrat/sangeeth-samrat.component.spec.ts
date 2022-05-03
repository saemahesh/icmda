import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SangeethSamratComponent } from './sangeeth-samrat.component';

describe('SangeethSamratComponent', () => {
  let component: SangeethSamratComponent;
  let fixture: ComponentFixture<SangeethSamratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SangeethSamratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SangeethSamratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
