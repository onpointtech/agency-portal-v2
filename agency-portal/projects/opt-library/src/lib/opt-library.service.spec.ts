import { TestBed } from '@angular/core/testing';

import { OptLibraryService } from './opt-library.service';

describe('OptLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OptLibraryService = TestBed.get(OptLibraryService);
    expect(service).toBeTruthy();
  });
});
