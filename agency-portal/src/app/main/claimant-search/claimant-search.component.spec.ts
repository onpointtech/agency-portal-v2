import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimantSearchComponent } from './claimant-search.component';

describe('ClaimantSearchComponent', () => {
  let component: ClaimantSearchComponent;
  let fixture: ComponentFixture<ClaimantSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimantSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimantSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
