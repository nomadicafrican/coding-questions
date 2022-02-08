var removeDuplicates = function (nums) {
  let pointer = 0; // index 0 of nums

  for (let pointer2 = 1; pointer2 < nums.length; pointer2++) {
    // looping over nums with index starting at 1
    if (nums[pointer] !== nums[pointer2]) {
      // if index 0 does not equal pointer2 which is i
      pointer++; // push pointer 1 index up
      nums[pointer] === nums[pointer2]; // make that index = pointer 2
    }
  }
  return pointer + 1; // because pointer 2 isnt known
};

console.log(removeDuplicates([1, 1, 2]));
