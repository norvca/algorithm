function _merge(left, right) {
  const mergedArray = [];
  let i = 0;
  let j = 0;

  while (left.length > i && right.length > j) {
    if (left[i] < right[j]) {
      mergedArray.push(left[i]);
      i++;
    } else {
      mergedArray.push(right[j]);
      j++;
    }
  }

  while (left.length > i) {
    mergedArray.push(left[i]);
    i++;
  }

  while (right.length > j) {
    mergedArray.push(right[j]);
    j++;
  }

  return mergedArray;
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  return _merge(mergeSort(left), mergeSort(right));
}

module.exports = mergeSort;
