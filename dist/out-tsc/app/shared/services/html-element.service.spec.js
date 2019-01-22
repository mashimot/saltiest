import { TestBed, inject } from '@angular/core/testing';
import { HtmlElementService } from './html-element.service';
describe('HtmlElementService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [HtmlElementService]
        });
    });
    it('should be created', inject([HtmlElementService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=html-element.service.spec.js.map