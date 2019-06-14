import { TestBed } from '@angular/core/testing';

import { OptimumComponentsService } from './optimum-components.service';

describe('OptimumComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OptimumComponentsService = TestBed.get(OptimumComponentsService);
    expect(service).toBeTruthy();
  });
});
