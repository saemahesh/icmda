import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaymentCodesComponent } from './view-payment-codes.component';

describe('ViewPaymentCodesComponent', () => {
  let component: ViewPaymentCodesComponent;
  let fixture: ComponentFixture<ViewPaymentCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPaymentCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPaymentCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
