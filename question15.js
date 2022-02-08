var isValid = function (s) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    switch (char) {
      case "(":
        arr.push(")");
        break;
      case "{":
        arr.push("}");
        break;
      case "[":
        arr.push("]");
        break;
      default:
        if (char !== arr.pop()) {
          return false;
        }
    }
  }
  return arr.length === 0;
};

console.log(isValid("("));
