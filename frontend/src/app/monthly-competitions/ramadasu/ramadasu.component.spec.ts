import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamadasuComponent } from './ramadasu.component';

describe('RamadasuComponent', () => {
  let component: RamadasuComponent;
  let fixture: ComponentFixture<RamadasuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamadasuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamadasuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
