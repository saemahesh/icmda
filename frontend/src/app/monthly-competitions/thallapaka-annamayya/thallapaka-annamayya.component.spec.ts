import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThallapakaAnnamayyaComponent } from './thallapaka-annamayya.component';

describe('ThallapakaAnnamayyaComponent', () => {
  let component: ThallapakaAnnamayyaComponent;
  let fixture: ComponentFixture<ThallapakaAnnamayyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThallapakaAnnamayyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThallapakaAnnamayyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
