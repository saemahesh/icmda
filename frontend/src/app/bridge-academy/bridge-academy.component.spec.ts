import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeAcademyComponent } from './bridge-academy.component';

describe('BridgeAcademyComponent', () => {
  let component: BridgeAcademyComponent;
  let fixture: ComponentFixture<BridgeAcademyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridgeAcademyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgeAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
