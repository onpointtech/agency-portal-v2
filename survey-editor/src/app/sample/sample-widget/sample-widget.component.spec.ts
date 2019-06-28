import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleWidgetComponent } from './sample-widget.component';

describe('SampleWidgetComponent', () => {
  let component: SampleWidgetComponent;
  let fixture: ComponentFixture<SampleWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
