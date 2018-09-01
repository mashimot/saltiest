import { TestBed, inject } from '@angular/core/testing';

import { CreateTableToJsonService } from './create-table-to-json.service';

describe('CreateTableToJsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateTableToJsonService]
    });
  });

  it('should be created', inject([CreateTableToJsonService], (service: CreateTableToJsonService) => {
    expect(service).toBeTruthy();
  }));
});
