import { getHello } from './getHello';

describe('getHello', () => {
  test('should return a greeting with the given name', () => {
    expect(getHello('Alice')).toBe('Hello, Alice!');
    expect(getHello('Bob')).toBe('Hello, Bob!');
  });
});
