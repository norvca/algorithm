function alphabetSubsequence(s: string): boolean {
  const wordArr = s.split('');

  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] <= wordArr[i - 1]) {
      return false;
    }
  }

  return true;
}

console.log(alphabetSubsequence('zab'));
console.log(alphabetSubsequence('effg'));
console.log(alphabetSubsequence('cdce'));
console.log(alphabetSubsequence('ace'));
console.log(alphabetSubsequence('bxz'));
