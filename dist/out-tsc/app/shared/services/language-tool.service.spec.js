import { TestBed, inject } from '@angular/core/testing';
import { LanguageToolService } from './language-tool.service';
describe('LanguageToolService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [LanguageToolService]
        });
    });
    it('should be created', inject([LanguageToolService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=language-tool.service.spec.js.map