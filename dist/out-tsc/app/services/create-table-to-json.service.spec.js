import { TestBed, inject } from '@angular/core/testing';
import { CreateTableToJsonService } from './create-table-to-json.service';
describe('CreateTableToJsonService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [CreateTableToJsonService]
        });
    });
    it('should be created', inject([CreateTableToJsonService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=create-table-to-json.service.spec.js.map