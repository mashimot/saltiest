import { TestBed, inject } from '@angular/core/testing';

import { FormConfigService } from './form-config.service';

describe('FormConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormConfigService]
    });
  });

  it('should be created', inject([FormConfigService], (service: FormConfigService) => {
    expect(service).toBeTruthy();
  }));
});
