interface frequencyCounter {
  [propName: string]: number;
}

function validAnagram(str1: string, str2: string) {
  if (str1.length !== str2.length) {
    return false;
  }

  let lookup: frequencyCounter = {};

  for (let val of str1) {
    lookup[val] = (lookup[val] || 0) + 1;
  }

  for (let val of str2) {
    if (!lookup[val]) {
      return false;
    } else {
      lookup[val] -= 1;
    }
  }

  return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));
