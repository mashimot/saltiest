import { TestBed, inject } from '@angular/core/testing';
import { RenderHtmlService } from './render-html.service';
describe('RenderHtmlService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [RenderHtmlService]
        });
    });
    it('should be created', inject([RenderHtmlService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=render-html.service.spec.js.map