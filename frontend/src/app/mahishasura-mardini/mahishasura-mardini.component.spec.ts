import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MahishasuraMardiniComponent } from './mahishasura-mardini.component';

describe('MahishasuraMardiniComponent', () => {
  let component: MahishasuraMardiniComponent;
  let fixture: ComponentFixture<MahishasuraMardiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahishasuraMardiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MahishasuraMardiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
