import { TestBed, inject } from '@angular/core/testing';
import { FormContentConfigService } from './form-content-config.service';
describe('FormContentConfigService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [FormContentConfigService]
        });
    });
    it('should be created', inject([FormContentConfigService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=form-content-config.service.spec.js.map