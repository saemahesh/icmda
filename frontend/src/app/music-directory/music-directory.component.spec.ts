import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicDirectoryComponent } from './music-directory.component';

describe('MusicDirectoryComponent', () => {
  let component: MusicDirectoryComponent;
  let fixture: ComponentFixture<MusicDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
