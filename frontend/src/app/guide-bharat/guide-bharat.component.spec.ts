import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideBharatComponent } from './guide-bharat.component';

describe('GuideBharatComponent', () => {
  let component: GuideBharatComponent;
  let fixture: ComponentFixture<GuideBharatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideBharatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideBharatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
