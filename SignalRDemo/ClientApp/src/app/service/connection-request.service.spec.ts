import { TestBed } from '@angular/core/testing';

import { ConnectionRequestService } from './connection-request.service';

describe('ConnectionRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnectionRequestService = TestBed.get(ConnectionRequestService);
    expect(service).toBeTruthy();
  });
});
