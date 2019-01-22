import { TestBed, inject } from '@angular/core/testing';
import { BootstrapGridSystemService } from './bootstrap-grid-system.service';
describe('BootstrapGridSystemService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [BootstrapGridSystemService]
        });
    });
    it('should be created', inject([BootstrapGridSystemService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=bootstrap-grid-system.service.spec.js.map