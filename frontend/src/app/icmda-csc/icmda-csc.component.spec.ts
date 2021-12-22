import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcmdaCscComponent } from './icmda-csc.component';

describe('IcmdaCscComponent', () => {
  let component: IcmdaCscComponent;
  let fixture: ComponentFixture<IcmdaCscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcmdaCscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcmdaCscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
