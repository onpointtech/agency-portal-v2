import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimumFormComponent } from './optimum-form.component';

describe('OptimumFormComponent', () => {
  let component: OptimumFormComponent;
  let fixture: ComponentFixture<OptimumFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptimumFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimumFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
