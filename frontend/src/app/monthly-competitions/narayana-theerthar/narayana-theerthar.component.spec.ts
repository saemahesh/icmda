import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarayanaTheertharComponent } from './narayana-theerthar.component';

describe('NarayanaTheertharComponent', () => {
  let component: NarayanaTheertharComponent;
  let fixture: ComponentFixture<NarayanaTheertharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarayanaTheertharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarayanaTheertharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
