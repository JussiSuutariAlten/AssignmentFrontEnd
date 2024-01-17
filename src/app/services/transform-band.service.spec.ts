import { TestBed } from '@angular/core/testing';

import { TransformBandService } from './transform-band.service';

describe('TransformBandService', () => {
  let service: TransformBandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransformBandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
