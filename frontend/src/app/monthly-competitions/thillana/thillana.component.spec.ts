import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThillanaComponent } from './thillana.component';

describe('ThillanaComponent', () => {
  let component: ThillanaComponent;
  let fixture: ComponentFixture<ThillanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThillanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThillanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
