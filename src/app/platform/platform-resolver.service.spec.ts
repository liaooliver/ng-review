import { TestBed } from '@angular/core/testing';

import { PlatformResolverService } from './platform-resolver.service';

describe('PlatformResolverService', () => {
  let service: PlatformResolverService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({});
    service = TestBed.inject(PlatformResolverService);
  });
});
