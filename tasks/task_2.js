const checkIsPalindrom = num => {
  const isNumberValid = (-2) ** 31 <= num && num <= 2 ** 31 - 1;

  if (!isNumberValid) {
    return 'Number is invalid!';
  } else {
    const str = num.toString();
    const reversedString = str.split('').reverse().join('');
    if (str === reversedString) {
      return true;
    } else {
      return false;
    }
  }
};

module.exports = { checkIsPalindrom };
