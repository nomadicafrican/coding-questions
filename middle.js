const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`${actual} = ${expected}`);
  } else {
    console.log(`${actual} != ${expected}`);
  }
};

const middle = (arr) => {
  if (arr.length % 2 === 0) {
    let evenmid = arr[Math.floor((arr.length - 1) / 2)];
    let middlenum = arr[Math.floor(arr.length / 2)];
    console.log(evenmid);
    return [middlenum, evenmid];
  } else {
    let middlenum = arr[Math.floor(arr.length / 2)];
    return middlenum;
  }
};
// const middle = function (array) {
//   if (array.length % 2 === 0) {
//     let middleEven = array[Math.floor((array.length - 1) / 2)];
//     let middleNumber = array[Math.floor(array.length / 2)];
//     return [middleEven, middleNumber];
//   } else {
//     let middleNumber = array[Math.floor(array.length / 2)];

//     return middleNumber;
//   }
// };

console.log(middle([1, 2, 3, 4]));

let name = { firstname: "mary" };

name.firstname = "Ammar ali";
name.lastname = "Naxar";

console.log(name);
