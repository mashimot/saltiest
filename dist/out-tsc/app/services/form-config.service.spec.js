import { TestBed, inject } from '@angular/core/testing';
import { FormConfigService } from './form-config.service';
describe('FormConfigService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [FormConfigService]
        });
    });
    it('should be created', inject([FormConfigService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=form-config.service.spec.js.map