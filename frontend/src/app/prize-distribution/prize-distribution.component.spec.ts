import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeDistributionComponent } from './prize-distribution.component';

describe('PrizeDistributionComponent', () => {
  let component: PrizeDistributionComponent;
  let fixture: ComponentFixture<PrizeDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrizeDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizeDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
