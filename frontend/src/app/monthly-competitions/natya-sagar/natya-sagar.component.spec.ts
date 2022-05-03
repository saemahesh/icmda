import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatyaSagarComponent } from './natya-sagar.component';

describe('NatyaSagarComponent', () => {
  let component: NatyaSagarComponent;
  let fixture: ComponentFixture<NatyaSagarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatyaSagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatyaSagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
