import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptLibraryComponent } from './opt-library.component';

describe('OptLibraryComponent', () => {
  let component: OptLibraryComponent;
  let fixture: ComponentFixture<OptLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
