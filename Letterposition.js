const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const initilize = sentence[i];
    if (!results[initilize]) {
      results[initilize] = [i];
    } else {
      results[initilize].push(i);
    }
  }
  return results;
};

console.log(letterPositions("ammar"));
