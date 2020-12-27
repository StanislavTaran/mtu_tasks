const { binaryIdxSearch } = require('../tasks/task_5');

describe('Must return idx = 2', () => {
  test('Invalid input data! must return', () => {
    expect(binaryIdxSearch([1, 3, 5, 6], 5)).toBe(2);
  });

  test('Must return idx = 1', () => {
    expect(binaryIdxSearch([1, 3, 5, 6], 2)).toBe(1);
  });

  test('Must return idx = 4', () => {
    expect(binaryIdxSearch([1, 3, 5, 6], 7)).toBe(4);
  });

  test('Must return idx = 0', () => {
    expect(binaryIdxSearch([1, 3, 5, 6], 0)).toBe(0);
  });

  test('Must return idx = 0', () => {
    expect(binaryIdxSearch([1], 0)).toBe(0);
  });
});
