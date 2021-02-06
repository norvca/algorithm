interface lookup {
  [prop: number]: number;
}

function countUniqueValues(arr: number[]): number {
  let lookup: lookup = {};
  let counter = 0;

  arr.forEach(el => {
    lookup[el] = (lookup[el] || 0) + 1;
  });

  for (let val in lookup) {
    counter++;
  }

  return counter;
}

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
