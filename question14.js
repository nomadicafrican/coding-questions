var addTwoNumbers = function (l1, l2) {
  let p1 = l1;
  let p2 = l2;
  var result = +p1.reverse().join("");
  let result2 = +p2.reverse().join("");

  let total = result + result2;

  const original = Array.from(String(total), Number).reverse();
  return original;
};

console.log(addTwoNumbers([0], [0]));
