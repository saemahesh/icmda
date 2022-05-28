import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeCoordinatorComponent } from './become-coordinator.component';

describe('BecomeCoordinatorComponent', () => {
  let component: BecomeCoordinatorComponent;
  let fixture: ComponentFixture<BecomeCoordinatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeCoordinatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
