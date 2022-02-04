var isPalindrome = function (x) {
  const number = x.toString().split("").reverse().join("");
  // to make a number reverse you would first need to make it a string,
  //split it at every letter and placing it in an array, then reversing said array
  // and joining at the end.
  // for a string you dont need to do toString
  return number;
};

console.log(isPalindrome("Ammar"));
