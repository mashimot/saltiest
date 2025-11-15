import { FormControl } from '@angular/forms';
import { SumBeEqualsToDirective } from './sum-be-equals-to.directive';

describe('SumBeEqualsToDirective', () => {
  it('should create an instance', () => {
    const directive = new SumBeEqualsToDirective();
    expect(directive).toBeTruthy();
  });

  it('should sum be valid (single line)', () => {
    const directive = new SumBeEqualsToDirective();
    directive.sumBeEqualsTo = 12;
    const SumBeEqualsToValidator = directive.validate(
      new FormControl(['12'].join('\n'))
    );

    expect(SumBeEqualsToValidator).toEqual(null);
  });

  it('should sum be valid (multiple lines)', () => {
    const directive = new SumBeEqualsToDirective();
    directive.sumBeEqualsTo = 12;
    const SumBeEqualsToValidator = directive.validate(
      new FormControl(['12', ' 5 7  ', '4 4 4  '].join('\n'))
    );

    expect(SumBeEqualsToValidator).toEqual(null);
  });

  it('should sum be invalid (multiple lines)', () => {
    const directive = new SumBeEqualsToDirective();
    directive.sumBeEqualsTo = 12;
    const SumBeEqualsToValidator = directive.validate(
      new FormControl(['12', ' 5 5  ', '4 4 4  '].join('\n'))
    );

    expect(SumBeEqualsToValidator).toEqual({
      isSumInvalid: true,
      sumBeEqualsTo: 12,
    });
  });
});
