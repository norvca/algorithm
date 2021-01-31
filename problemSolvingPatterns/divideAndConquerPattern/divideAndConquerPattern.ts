// Time complexity: O(log(N))
// Space complexity: O(1)

function search(arr: number[], val: number): number {
  let minIndex = 0;
  let maxIndex = arr.length - 1;

  if (arr[minIndex] > val || arr[maxIndex] < val) return -1;

  while (minIndex <= maxIndex) {
    let middleIndex = Math.floor((minIndex + maxIndex) / 2);
    let middleElement = arr[middleIndex];

    if (middleElement < val) {
      minIndex = middleIndex + 1;
    } else if (middleElement > val) {
      maxIndex = middleIndex - 1;
    } else {
      return middleIndex;
    }
  }

  return -1;
}

search([2, 3, 4, 5], 7);
search([2, 3, 4, 5], 4);
