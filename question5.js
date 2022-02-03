const tail = (arr) => {
  const newarr = arr;
  return newarr.slice(1);
};
const somearr = [1, 2, 3, 4, 5];
console.log(tail(somearr));
console.log(somearr);
