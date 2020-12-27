const createUnitedSortedArray = (drivenArr, principalArr) => {
  const isValidLength = drivenArr.length >= 1 && principalArr.length <= 1000;
  const isAllElemsInDriven = principalArr.every(item => drivenArr.includes(item));
  const uniqNumbers = [...new Set(principalArr)];

  if (!isAllElemsInDriven || !isValidLength || uniqNumbers.length !== principalArr.length) {
    return 'Invalid input data!';
  }

  const notIncludedNumbersList = [];
  let result = [...principalArr];

  for (elem of drivenArr) {
    const principleNumberIdx = result.indexOf(elem);
    if (principleNumberIdx !== -1) {
      result.splice(principleNumberIdx, 0, elem);
    } else {
      notIncludedNumbersList.push(elem);
    }
  }

  return [...result, ...notIncludedNumbersList.sort((a, b) => a - b)];
};

console.log(createUnitedSortedArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]));
