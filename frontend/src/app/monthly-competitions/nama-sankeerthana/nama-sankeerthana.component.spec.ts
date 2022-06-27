import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamaSankeerthanaComponent } from './nama-sankeerthana.component';

describe('NamaSankeerthanaComponent', () => {
  let component: NamaSankeerthanaComponent;
  let fixture: ComponentFixture<NamaSankeerthanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamaSankeerthanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamaSankeerthanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
