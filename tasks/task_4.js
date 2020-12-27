const createSortedArray = (drivenArr, principalArr) => {
  const isValidLength = drivenArr.length >= 1 && principalArr.length <= 1000;
  const isAllElemsInDriven = principalArr.every(item => drivenArr.includes(item));
  const uniqNumbers = [...new Set(principalArr)];

  if (!isAllElemsInDriven || !isValidLength || uniqNumbers.length !== principalArr.length) {
    return 'Invalid input data!';
  }

  const notIncludedNumbersList = drivenArr.filter(item => !principalArr.includes(item));

  const result = [];
  for (let idx = 0; idx < principalArr.length; idx++) {
    result.push(...drivenArr.filter(item => item === principalArr[idx]));
  }
  return [...result, ...notIncludedNumbersList.sort((a, b) => a - b)];
};

module.exports = { createSortedArray };
