import { SnakeCaseToCamelCasePipe } from './snake-case-to-camel-case.pipe';

describe('SnakeCaseToCamelCasePipe', () => {
  it('create an instance', () => {
    const pipe = new SnakeCaseToCamelCasePipe();
    expect(pipe).toBeTruthy();
  });
});
