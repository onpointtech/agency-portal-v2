import { TestBed } from '@angular/core/testing';

import { AgencyServiceService } from './agency-service.service';

describe('AgencyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgencyServiceService = TestBed.get(AgencyServiceService);
    expect(service).toBeTruthy();
  });
});
