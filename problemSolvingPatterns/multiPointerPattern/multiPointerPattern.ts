// Time complexity: O(N)
// Space complexity: O(1)

function countUniqueValues(numbers: number[]) {
  if (numbers.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < numbers.length; j++) {
    if (numbers[i] !== numbers[j]) {
      i++;
      numbers[i] = numbers[j];
    }
  }

  return i + 1;
}

countUniqueValues([1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 6]);
