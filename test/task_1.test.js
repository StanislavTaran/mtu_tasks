const { convertRomanToArabic } = require('../tasks/task_1');

describe('Test convertRomanToArabic function', () => {
  test('Incorrect input string must return', () => {
    expect(convertRomanToArabic('RX')).toBe('Incorrect input string!');
  });

  test('III in Roman must be 3 in Arabic', () => {
    expect(convertRomanToArabic('III')).toBe(3);
  });

  test('IV in Roman must be 4 in Arabic', () => {
    expect(convertRomanToArabic('IV')).toBe(4);
  });

  test('IX in Roman must be 9 in Arabic', () => {
    expect(convertRomanToArabic('IX')).toBe(9);
  });

  test('LVIII in Roman must be 58 in Arabic', () => {
    expect(convertRomanToArabic('LVIII')).toBe(58);
  });

  test('MCMXCIV in Roman must be 1994 in Arabic', () => {
    expect(convertRomanToArabic('MCMXCIV')).toBe(1994);
  });
});
