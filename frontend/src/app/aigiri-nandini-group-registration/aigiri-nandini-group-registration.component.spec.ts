import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AigiriNandiniGroupRegistrationComponent } from './aigiri-nandini-group-registration.component';

describe('AigiriNandiniGroupRegistrationComponent', () => {
  let component: AigiriNandiniGroupRegistrationComponent;
  let fixture: ComponentFixture<AigiriNandiniGroupRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AigiriNandiniGroupRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AigiriNandiniGroupRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
