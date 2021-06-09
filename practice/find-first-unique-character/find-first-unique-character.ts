// Time complexity: O(n)
// the length of input string can be O(n) when looping it

// Space complexity: O(1)
// the hash table only has 64 members (a-zA-Z)

// Solution
// 1. Loop the string and put it's members into a hash table
// 2. Loop the string again and find if the current member is unique in our hash table
// - 2.1 if the current member is unique, return it
// - 2.2 otherwise return -1

const characters = 'aaron';

type HashTable = {
  [key: string]: number;
};

function firstUniqueChar(str: string) {
  const hashTable: HashTable = {};

  for (let el of str) {
    hashTable[el] ? hashTable[el]++ : (hashTable[el] = 1);
  }

  for (let i = 0; i < str.length; i++) {
    const currentStr = str[i];
    if (hashTable[currentStr] === 1) return currentStr;
  }

  return -1;
}

firstUniqueChar(characters);
