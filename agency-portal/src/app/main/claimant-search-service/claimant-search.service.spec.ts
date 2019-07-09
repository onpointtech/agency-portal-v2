import { TestBed } from '@angular/core/testing';

import { ClaimantSearchService } from './claimant-search.service';

describe('ClaimantSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClaimantSearchService = TestBed.get(ClaimantSearchService);
    expect(service).toBeTruthy();
  });
});
