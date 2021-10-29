function swap(array, leftIndex, rightIndex) {
  let temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
}

function partition(array, startIndex = 0, endIndex = array.length - 1) {
  let swapIndex = startIndex;
  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[startIndex]) {
      swapIndex++;
      swap(array, i, swapIndex);
    }
  }
  swap(array, startIndex, swapIndex);
  return swapIndex;
}

function quickSort(array, startIndex = 0, endIndex = array.length - 1) {
  if (startIndex < endIndex) {
    const pivotIndex = partition(array, startIndex, endIndex);

    quickSort(array, startIndex, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, endIndex);
  }
  return array;
}

module.exports = { quickSort, partition };
