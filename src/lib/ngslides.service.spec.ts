import { TestBed } from '@angular/core/testing';

import { NgslidesService } from './ngslides.service';

describe('NgslidesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgslidesService = TestBed.get(NgslidesService);
    expect(service).toBeTruthy();
  });
});
