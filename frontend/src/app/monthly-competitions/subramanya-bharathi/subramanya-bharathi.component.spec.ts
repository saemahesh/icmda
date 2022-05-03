import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubramanyaBharathiComponent } from './subramanya-bharathi.component';

describe('SubramanyaBharathiComponent', () => {
  let component: SubramanyaBharathiComponent;
  let fixture: ComponentFixture<SubramanyaBharathiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubramanyaBharathiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubramanyaBharathiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
