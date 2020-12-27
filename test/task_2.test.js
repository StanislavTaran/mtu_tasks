const { checkIsPalindrom } = require('../tasks/task_2');

describe('Test checkIsPalindrom function', () => {
  test('Number is invalid! must return', () => {
    expect(checkIsPalindrom(2 ** 31)).toBe('Number is invalid!');
  });

  test('Number 121 must return TRUE', () => {
    expect(checkIsPalindrom(121)).toBe(true);
  });

  test('Number -121 must return FALSE', () => {
    expect(checkIsPalindrom(-121)).toBe(false);
  });

  test('Number 10 must return FALSE', () => {
    expect(checkIsPalindrom(10)).toBe(false);
  });

  test('Number -101 must return FALSE', () => {
    expect(checkIsPalindrom(-101)).toBe(false);
  });
});
