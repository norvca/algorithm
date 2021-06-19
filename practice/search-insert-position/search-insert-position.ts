// Time complexity: O(logN)
// We half cut the array each time, so it's O(logN)

// Space complexity: O(1)
// We used two variable, and some temporary variable in while loop, wo it's O(1)

// Solution
// - Find the lowestIndex and highestIndex of number array
// - When lowestIndex <= highestIndex
//   - Calculate the middle value in the array
//     - NOTE: const middleIndex = Math.floor((lowestIndex + highestIndex)/2)
//     - NOTE: const middleValue = numberArr[middleIndex]
//   - If target number is equal to middle value, return middleIndex
//   - If target number is bigger than middle value, Set lowestIndex to middleIndex + 1
//     - NOTE: Because the index of target is greater than middleIndex
//   - If target number is smaller than middle value, Set highestIndex to middleIndex - 1
//     - NOTE: Then the index of target is smaller than middleIndex
// - return lowestIndex

function searchInsertPosition(numArr: number[], target: number) {
  let lowestIndex = 0;
  let highestIndex = numArr.length - 1;

  while (lowestIndex <= highestIndex) {
    const middleIndex = Math.floor((lowestIndex + highestIndex) / 2);
    const middleValue = numArr[middleIndex];

    if (target === middleValue) return middleIndex;
    if (target > middleValue) {
      lowestIndex = middleIndex + 1;
    }
    if (target < middleValue) {
      highestIndex = middleIndex - 1;
    }
  }
  return lowestIndex;
}

searchInsertPosition([1, 2, 5, 66, 778], -1);
