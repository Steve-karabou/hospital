import { TestBed } from '@angular/core/testing';

import { GetPatientResolver } from './get-patient.resolver';

describe('GetPatientResolver', () => {
  let resolver: GetPatientResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetPatientResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
