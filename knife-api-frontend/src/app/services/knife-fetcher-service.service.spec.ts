import { TestBed } from '@angular/core/testing';

import { KnifeFetcherServiceService } from './knife-fetcher-service.service';

describe('KnifeFetcherServiceService', () => {
  let service: KnifeFetcherServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnifeFetcherServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
