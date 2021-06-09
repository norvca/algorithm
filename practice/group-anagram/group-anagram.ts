// Time complexity: O(n)

// Space complexity: O(1)

// Solution
// 1. Create a hash table
// 2. Loop the array, to each string A, sort it, get the sorted string B
// 3. Find if hash table has the property: sorted string B
// - 3.1 If it has, push A into property B of hash table
// - 3.2 If not, Create property B of hash table, push A into it
// 4. Get all value of hash table, put them into an array

type HashTable2 = {
  [key: string]: string[];
};

function groupAnagram(strArr: string[]) {
  const hashTable: HashTable2 = {};

  for (let str of strArr) {
    const sortedStr = str.split('').sort().join('');

    hashTable[sortedStr]
      ? hashTable[sortedStr].push(str)
      : (hashTable[sortedStr] = [str]);
  }

  return Object.values(hashTable);
}

groupAnagram(['as', 'sa', 'abc', 'abb', 'bca', 'cba']);
