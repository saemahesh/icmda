import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GopalakrishnaBharathiComponent } from './gopalakrishna-bharathi.component';

describe('GopalakrishnaBharathiComponent', () => {
  let component: GopalakrishnaBharathiComponent;
  let fixture: ComponentFixture<GopalakrishnaBharathiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GopalakrishnaBharathiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GopalakrishnaBharathiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
