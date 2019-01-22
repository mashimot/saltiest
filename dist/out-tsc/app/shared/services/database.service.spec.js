import { TestBed, inject } from '@angular/core/testing';
import { DatabaseService } from './database.service';
describe('DatabaseService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [DatabaseService]
        });
    });
    it('should be created', inject([DatabaseService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=database.service.spec.js.map