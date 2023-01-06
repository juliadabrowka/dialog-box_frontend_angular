import { TestBed } from '@angular/core/testing';

import { SeriePageDetailsResolver } from './serie-page-details.resolver';

describe('SeriePageDetailsResolver', () => {
  let resolver: SeriePageDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SeriePageDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
