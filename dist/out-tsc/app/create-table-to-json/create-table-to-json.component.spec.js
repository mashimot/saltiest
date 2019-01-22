import { async, TestBed } from '@angular/core/testing';
import { CreateTableToJsonComponent } from './create-table-to-json.component';
describe('CreateTableToJsonComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CreateTableToJsonComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CreateTableToJsonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=create-table-to-json.component.spec.js.map