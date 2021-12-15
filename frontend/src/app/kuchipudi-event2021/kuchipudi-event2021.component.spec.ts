import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KuchipudiEvent2021Component } from './kuchipudi-event2021.component';

describe('KuchipudiEvent2021Component', () => {
  let component: KuchipudiEvent2021Component;
  let fixture: ComponentFixture<KuchipudiEvent2021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuchipudiEvent2021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuchipudiEvent2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
