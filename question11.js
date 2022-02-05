var mergeTwoLists = function (list1, list2) {
  let arr = [];
  for (let i = 0; i < list1.length; i++) {
    if (arr.indexOf(list1[i]) === -1) {
      arr.push(list1[i]);
    }
  }
  for (let i = 0; i < list2.length; i++) {
    if (arr.indexOf(list2[i]) === -1) {
      // index of return -1 if it doesnt find it
      arr.push(list2[i]);
    }
  }
  if (arr === null) {
    return [];
  }
  return arr;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
