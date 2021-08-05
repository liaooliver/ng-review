import { TestBed } from '@angular/core/testing';

import { PlatformResolverService } from './platform-resolver.service';

describe('PlatformResolverService', () => {
  let service: PlatformResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatformResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
