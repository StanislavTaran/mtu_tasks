const getIsPalindrom = num => {
  const isNumberValid = (-2) ** 31 <= num && num <= 2 ** 31 - 1;

  if (!isNumberValid) {
    return 'Number is invalid!';
  } else {
    const string = num.toString();
    const reversedString = stringifiedNumber.split('').reverse().join('');
    if (string === reversedString) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(getIsPalindrom(20202));
