import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimumSubmitComponent } from './optimum-submit.component';

describe('OptimumSubmitComponent', () => {
  let component: OptimumSubmitComponent;
  let fixture: ComponentFixture<OptimumSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptimumSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimumSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
