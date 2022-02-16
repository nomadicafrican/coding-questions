const countletters = (letters) => {
  let result = {};
  for (let i = 0; i < letters.length; i++) {
    let letter = letters[i];
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }

  return result;
};

console.log(countletters("LHLHAMA"));
