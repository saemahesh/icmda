import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersEthicsComponent } from './members-ethics.component';

describe('MembersEthicsComponent', () => {
  let component: MembersEthicsComponent;
  let fixture: ComponentFixture<MembersEthicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersEthicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersEthicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
