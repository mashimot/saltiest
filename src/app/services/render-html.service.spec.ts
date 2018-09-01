import { TestBed, inject } from '@angular/core/testing';

import { RenderHtmlService } from './render-html.service';

describe('RenderHtmlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RenderHtmlService]
    });
  });

  it('should be created', inject([RenderHtmlService], (service: RenderHtmlService) => {
    expect(service).toBeTruthy();
  }));
});
