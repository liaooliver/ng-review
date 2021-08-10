import { TestBed } from '@angular/core/testing';

import { IntroductResolver } from './introduct.resolver';

describe('IntroductResolver', () => {
  let resolver: IntroductResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(IntroductResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
