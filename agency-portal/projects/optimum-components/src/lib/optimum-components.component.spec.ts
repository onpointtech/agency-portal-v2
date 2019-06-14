import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimumComponentsComponent } from './optimum-components.component';

describe('OptimumComponentsComponent', () => {
  let component: OptimumComponentsComponent;
  let fixture: ComponentFixture<OptimumComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptimumComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimumComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
