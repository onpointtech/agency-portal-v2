import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClaimantAddressesComponent } from './edit-claimant-addresses.component';

describe('EditClaimantAddressesComponent', () => {
  let component: EditClaimantAddressesComponent;
  let fixture: ComponentFixture<EditClaimantAddressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClaimantAddressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClaimantAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
