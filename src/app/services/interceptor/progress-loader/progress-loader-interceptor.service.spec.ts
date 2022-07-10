import { TestBed } from '@angular/core/testing';

import { ProgressLoaderInterceptorService } from './progress-loader-interceptor.service';

describe('ProgressLoaderInterceptorService', () => {
  let service: ProgressLoaderInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressLoaderInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});