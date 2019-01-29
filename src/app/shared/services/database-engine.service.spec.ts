import { TestBed, inject } from '@angular/core/testing';

import { DatabaseEngine } from './database-engine.service';

describe('DatabaseEngine', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatabaseEngine]
    });
  });

  it('should be created', inject([DatabaseEngine], (service: DatabaseEngine) => {
    expect(service).toBeTruthy();
  }));
});
