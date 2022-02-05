var romanToInt = function (s) {
  const legend = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;

  // M X I V current = c next = n
  //  is c bigger than n? if no add it to total, however is n bigger than s? then subtract total

  for (let i = 0; i < s.length; i++) {
    // loop through letters input
    let current = legend[s.charAt(i)]; // map every letter to the legend with charAt s being the letters
    let next = legend[s.charAt(i + 1)]; // map the next to the index plus 1

    if (current >= next) {
      // if the current number is bigger than next
      total += current; // add to total
    } else if (current < next) {
      // if its not bigger than next
      total += next - current; // do next - current and add to total
      i++; // and move one index above as you used both numbers
    } else {
      total += current; // last case when there's a current number but no next number
    }
  }
  return total;
};

console.log(romanToInt("MCMXCIV"));
