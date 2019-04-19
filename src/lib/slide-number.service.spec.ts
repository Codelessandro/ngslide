import { TestBed } from '@angular/core/testing';

import { SlideNumberService } from './slide-number.service';

describe('SlideNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlideNumberService = TestBed.get(SlideNumberService);
    expect(service).toBeTruthy();
  });
});
