import { TestBed, inject } from '@angular/core/testing';

import { FormContentConfigService } from './form-content-config.service';

describe('FormContentConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormContentConfigService]
    });
  });

  it('should be created', inject([FormContentConfigService], (service: FormContentConfigService) => {
    expect(service).toBeTruthy();
  }));
});
