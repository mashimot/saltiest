import { TestBed, inject } from '@angular/core/testing';

import { BootstrapGridSystemService } from './bootstrap-grid-system.service';

describe('BootstrapGridSystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BootstrapGridSystemService]
    });
  });

  it('should be created', inject([BootstrapGridSystemService], (service: BootstrapGridSystemService) => {
    expect(service).toBeTruthy();
  }));
});
