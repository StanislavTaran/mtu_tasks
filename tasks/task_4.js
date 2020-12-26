const createUnitedSortedArray = (drivenArr, principalArr) => {
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
