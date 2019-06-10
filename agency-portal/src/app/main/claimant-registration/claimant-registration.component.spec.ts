import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimantRegistrationComponent } from './claimant-registration.component';

describe('ClaimantRegistrationComponent', () => {
  let component: ClaimantRegistrationComponent;
  let fixture: ComponentFixture<ClaimantRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimantRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimantRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
