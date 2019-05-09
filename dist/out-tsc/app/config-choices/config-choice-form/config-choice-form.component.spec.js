import { async, TestBed } from '@angular/core/testing';
import { ConfigChoiceFormComponent } from './config-choice-form.component';
describe('ConfigChoiceFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ConfigChoiceFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ConfigChoiceFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=config-choice-form.component.spec.js.map