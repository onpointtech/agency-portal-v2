import { TestBed } from '@angular/core/testing';

import { UserRoleCheckingService } from './user-role-checking.service';

describe('UserRoleCheckingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRoleCheckingService = TestBed.get(UserRoleCheckingService);
    expect(service).toBeTruthy();
  });
});
