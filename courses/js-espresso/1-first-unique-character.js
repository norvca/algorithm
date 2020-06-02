// desc: Find the first unique character of a word, like 'r' in 'aaron'

function firstUniqueChar(aString) {
  for (let i = 0; i < aString.length; i++) {
    const letter = aString[i];

    if (aString.indexOf(letter) === aString.lastIndexOf(letter)) {
      return letter;
    }
  }

  return `No unique character`;
}

firstUniqueChar('aarr');

// time complexity: n^2
// space complexity: 1
