import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UthukkaduVenkatakaviComponent } from './uthukkadu-venkatakavi.component';

describe('UthukkaduVenkatakaviComponent', () => {
  let component: UthukkaduVenkatakaviComponent;
  let fixture: ComponentFixture<UthukkaduVenkatakaviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UthukkaduVenkatakaviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UthukkaduVenkatakaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
