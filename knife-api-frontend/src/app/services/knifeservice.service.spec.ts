import { TestBed } from '@angular/core/testing';

import { KnifeserviceService } from './knifeservice.service';

describe('KnifeserviceService', () => {
  let service: KnifeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnifeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
