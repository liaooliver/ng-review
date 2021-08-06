import { TestBed } from '@angular/core/testing';

import { ProfileResolver } from './profile-resolver.service';

describe('ProfileResolverService', () => {
  let service: ProfileResolver;

  beforeEach(async () => {
    await TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileResolver);
  });


});
