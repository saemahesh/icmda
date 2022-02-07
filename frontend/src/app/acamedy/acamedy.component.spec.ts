import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcamedyComponent } from './acamedy.component';

describe('AcamedyComponent', () => {
  let component: AcamedyComponent;
  let fixture: ComponentFixture<AcamedyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcamedyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcamedyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
