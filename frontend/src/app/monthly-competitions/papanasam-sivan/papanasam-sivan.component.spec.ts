import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapanasamSivanComponent } from './papanasam-sivan.component';

describe('PapanasamSivanComponent', () => {
  let component: PapanasamSivanComponent;
  let fixture: ComponentFixture<PapanasamSivanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapanasamSivanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapanasamSivanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
