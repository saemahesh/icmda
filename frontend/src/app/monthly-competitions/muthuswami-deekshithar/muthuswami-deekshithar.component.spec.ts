import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuthuswamiDeekshitharComponent } from './muthuswami-deekshithar.component';

describe('MuthuswamiDeekshitharComponent', () => {
  let component: MuthuswamiDeekshitharComponent;
  let fixture: ComponentFixture<MuthuswamiDeekshitharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuthuswamiDeekshitharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuthuswamiDeekshitharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
