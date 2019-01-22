import { async, TestBed } from '@angular/core/testing';
import { ConfigTableBuilderComponent } from './config-table-builder.component';
describe('ConfigTableBuilderComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ConfigTableBuilderComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ConfigTableBuilderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=config-table-builder.component.spec.js.map