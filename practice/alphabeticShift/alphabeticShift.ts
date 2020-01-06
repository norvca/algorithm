function alphabeticShift(inputString: string): string {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];

  let wordArr = inputString.split('');
  let newWordArr = [];

  newWordArr = wordArr.map((word: string) => {
    let index = 0;

    if (word !== 'z') {
      index = alphabet.indexOf(word) + 1;
    }

    word = alphabet[index];
    return word;
  });

  return newWordArr.join('');
}

console.log(alphabeticShift('crazy'));
