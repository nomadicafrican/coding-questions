function average(list) {
  var sum = 0;

  for (var num of list) {
    sum += num;
  }
  return sum / list.length;
}

console.log(average([3, 5, 7]));
// New one
var input = process.argv[2];

function reverse(original) {
  if (input) {
    console.log(reverse(input));
  }
  return original.split("").reverseList().join("");
}
