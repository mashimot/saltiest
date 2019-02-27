import { TestBed, inject } from '@angular/core/testing';
import { DatabaseEngine } from './database-engine.service';
describe('DatabaseEngine', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [DatabaseEngine]
        });
    });
    it('should be created', inject([DatabaseEngine], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=database-engine.service.spec.js.map