var checkIsValidString = s => {
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
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
