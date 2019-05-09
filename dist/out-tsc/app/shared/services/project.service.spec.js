import { TestBed } from '@angular/core/testing';
import { ProjectService } from './project.service';
describe('ProjectService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ProjectService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=project.service.spec.js.map