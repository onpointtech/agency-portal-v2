import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSampleComponent } from './home-sample.component';

describe('HomeSampleComponent', () => {
  let component: HomeSampleComponent;
  let fixture: ComponentFixture<HomeSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
