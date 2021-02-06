interface lookup {
  [prop: string]: number;
}

function validAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  }

  let lookup: lookup = {};

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

validAnagram('', ''); // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', 'nagaram'); // true
validAnagram('rat', 'car'); // false) // false
validAnagram('awesome', 'awesom'); // false
validAnagram('qwerty', 'qeywrt'); // true
validAnagram('texttwisttime', 'timetwisttext'); // true
