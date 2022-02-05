var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let num2 = target - nums[i];
    console.log(num2);
    // console.log(i);
    if (map.has(num2)) {
      // console.log(i);
      return [i, map.get(num2)];
    }
    map.set(num1, i);
  }
};

console.log(twoSum([3, 2, 4], 6));
