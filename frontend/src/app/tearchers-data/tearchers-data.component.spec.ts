import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TearchersDataComponent } from './tearchers-data.component';

describe('TearchersDataComponent', () => {
  let component: TearchersDataComponent;
  let fixture: ComponentFixture<TearchersDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TearchersDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TearchersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
