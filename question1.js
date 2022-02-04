// Reverse a string

const string = "hello";

function FirstReverse(str) {
  let newstring = ""; // make a new string for the new letters
  for (let i = str.length - 1; i >= 0; i--) {
    // say the string is hello then str.length is 5
    // so i = 5 - 1 = 4
    // number 5 is letter O cause of i--
    newstring += str[i];
    // now the string is being added to str[i] which is 0
    // so now new string has '' + 'O' = 'O'
  }
  return newstring;
}

// console.log(FirstReverse(string));

const emptyarr = [];
const sum = (num) => {
  const add = (num += 1);

  return emptyarr.push(add);
};

sum(2);
sum(3);
sum((num) => {
  num++;
});
console.log(emptyarr);
