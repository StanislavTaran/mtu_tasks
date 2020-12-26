const binaryIdxSearch = (list, inputNumber) => {
  let lowIdx = 0;
  let highIdx = list.length - 1;

  let targetIdx = null;

  if (inputNumber > list[highIdx]) {
    return highIdx + 1;
  } else if (inputNumber < list[0]) {
    return 0;
  }
  while (lowIdx <= highIdx) {
    const middleIdx = Math.trunc(highIdx - lowIdx / 2);
    const guessedNumber = list[middleIdx];

    if (inputNumber === guessedNumber) {
      targetIdx = middleIdx;
      break;
    } else if (inputNumber > guessedNumber) {
      lowIdx = middleIdx + 1;
      targetIdx = lowIdx;
    } else if (inputNumber < guessedNumber) {
      highIdx = middleIdx - 1;
      targetIdx = highIdx;
    }
  }
  return targetIdx;
};

console.log(binaryIdxSearch([1, 3, 5, 6], 4));

// binaryIdxSearch([1, 3, 5, 6], 8);
