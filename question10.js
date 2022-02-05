var isPalindrome = function (x) {
  const number = parseInt(x.toString().split("").reverse().join(""));
  // to make a number reverse you would first need to make it a string,
  //split it at every letter and placing it in an array, then reversing said array
  // and joining at the end.
  // for a string you dont need to do toString
  // ParseINt is to covert to integer
  console.log("number", number);
  if (x === number) {
    return true;
  }
  return false;
};

console.log(isPalindrome(-222));
