import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KuchipudiEventComponent } from './kuchipudi-event.component';

describe('KuchipudiEventComponent', () => {
  let component: KuchipudiEventComponent;
  let fixture: ComponentFixture<KuchipudiEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuchipudiEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuchipudiEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
