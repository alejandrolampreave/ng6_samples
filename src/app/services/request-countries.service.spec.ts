import { TestBed } from '@angular/core/testing';

import { RequestCountriesService } from './request-countries.service';

describe('RequestCountriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestCountriesService = TestBed.get(RequestCountriesService);
    expect(service).toBeTruthy();
  });
});
