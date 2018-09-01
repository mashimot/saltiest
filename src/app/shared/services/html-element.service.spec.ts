import { TestBed, inject } from '@angular/core/testing';

import { HtmlElementService } from './html-element.service';

describe('HtmlElementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HtmlElementService]
    });
  });

  it('should be created', inject([HtmlElementService], (service: HtmlElementService) => {
    expect(service).toBeTruthy();
  }));
});
