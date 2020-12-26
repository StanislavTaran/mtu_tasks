const convertRomanToArabic = inputString => {
  const matches = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const romanNumbers = Object.keys(matches);
  const isEveryCharacterCorrect = [...inputString].every(character => romanNumbers.includes(character));

  if (inputString.length <= 0 || !isEveryCharacterCorrect) {
    return '>>>EXCEPTION: Incorrect input string!';
  }

  return [...inputString].reduce((acc, character, idx, charactersList) => {
    return matches[charactersList[idx + 1]] > matches[character] ? acc - matches[character] : acc + matches[character];
  }, 0);
};

console.log(convertRomanToArabic('CDIV'));
