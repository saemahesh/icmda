import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyamaSastriComponent } from './syama-sastri.component';

describe('SyamaSastriComponent', () => {
  let component: SyamaSastriComponent;
  let fixture: ComponentFixture<SyamaSastriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyamaSastriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyamaSastriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
