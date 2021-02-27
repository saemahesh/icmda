import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEmailsFormComponent } from './send-emails-form.component';

describe('SendEmailsFormComponent', () => {
  let component: SendEmailsFormComponent;
  let fixture: ComponentFixture<SendEmailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendEmailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendEmailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
