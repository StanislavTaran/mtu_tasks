const checkIsValidString = s => {
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const rightParentheses = Object.values(map);
  const leftParentheses = Object.keys(map);

  const isOnlyValidPar = [...s].every(item => rightParentheses.includes(item) || leftParentheses.includes(item));

  if (s.length < 1 || s.length > 104 || !isOnlyValidPar) {
    return 'Invalid string!';
  }

  const stack = [];

  for (let idx = 0; idx < s.length; idx++) {
    if (map[s[idx]]) {
      stack.push(map[s[idx]]);
    } else {
      const elem = stack.pop();
      if (elem !== s[idx]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(checkIsValidString('{}()'));
