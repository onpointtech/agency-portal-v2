import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClaimantDetailsComponent } from './edit-claimant-details.component';

describe('EditClaimantDetailsComponent', () => {
  let component: EditClaimantDetailsComponent;
  let fixture: ComponentFixture<EditClaimantDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClaimantDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClaimantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
