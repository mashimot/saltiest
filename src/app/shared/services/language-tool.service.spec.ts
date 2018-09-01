import { TestBed, inject } from '@angular/core/testing';

import { LanguageToolService } from './language-tool.service';

describe('LanguageToolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LanguageToolService]
    });
  });

  it('should be created', inject([LanguageToolService], (service: LanguageToolService) => {
    expect(service).toBeTruthy();
  }));
});
