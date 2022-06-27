import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalamuraliKrishnaComponent } from './balamurali-krishna.component';

describe('BalamuraliKrishnaComponent', () => {
  let component: BalamuraliKrishnaComponent;
  let fixture: ComponentFixture<BalamuraliKrishnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalamuraliKrishnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalamuraliKrishnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
