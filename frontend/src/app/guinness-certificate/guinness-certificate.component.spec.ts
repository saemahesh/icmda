import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuinnessCertificateComponent } from './guinness-certificate.component';

describe('GuinnessCertificateComponent', () => {
  let component: GuinnessCertificateComponent;
  let fixture: ComponentFixture<GuinnessCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuinnessCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuinnessCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
