import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideKuchipudiComponent } from './guide-kuchipudi.component';

describe('GuideKuchipudiComponent', () => {
  let component: GuideKuchipudiComponent;
  let fixture: ComponentFixture<GuideKuchipudiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideKuchipudiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideKuchipudiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
