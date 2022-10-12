import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateYandexComponent } from './validate-yandex.component';

describe('ValidateYandexComponent', () => {
  let component: ValidateYandexComponent;
  let fixture: ComponentFixture<ValidateYandexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateYandexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateYandexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
