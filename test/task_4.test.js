const { createSortedArray } = require('../tasks/task_4');

describe('Test createUnitedSortedArray function', () => {
  test('Invalid input data! must return', () => {
    expect(createSortedArray([], [1, 2])).toBe('Invalid input data!');
  });

  test('Invalid input data! must return', () => {
    expect(createSortedArray([2, 1], [1, 2, 1])).toBe('Invalid input data!');
  });

  test('Fn must return [2,2,2,1,4,3,3,9,6,7,19]', () => {
    expect(createSortedArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]).join('')).toBe(
      [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19].join(''),
    );
  });
});
