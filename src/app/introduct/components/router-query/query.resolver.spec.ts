import { TestBed } from '@angular/core/testing';

import { QueryResolver } from './query.resolver';

describe('QueryResolver', () => {
  let resolver: QueryResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(QueryResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
