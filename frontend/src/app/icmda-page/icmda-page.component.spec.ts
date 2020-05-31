import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcmdaPageComponent } from './icmda-page.component';

describe('IcmdaPageComponent', () => {
  let component: IcmdaPageComponent;
  let fixture: ComponentFixture<IcmdaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcmdaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcmdaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
