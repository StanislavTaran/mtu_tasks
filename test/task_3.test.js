const { checkIsValidString } = require('../tasks/task_3');

describe('Test checkIsValidString function', () => {
  test('Invalid string! must return', () => {
    expect(checkIsValidString('{c}')).toBe('Invalid string!');
  });

  test('() must return TRUE', () => {
    expect(checkIsValidString('()')).toBe(true);
  });

  test(' ()[]{} must return TRUE', () => {
    expect(checkIsValidString('()[]{}')).toBe(true);
  });

  test('(] must return FALSE', () => {
    expect(checkIsValidString('(]')).toBe(false);
  });

  test('([)] must return FALSE', () => {
    expect(checkIsValidString('([)]')).toBe(false);
  });

  test('{[]} must return TRUE', () => {
    expect(checkIsValidString('{[]}')).toBe(true);
  });
});
