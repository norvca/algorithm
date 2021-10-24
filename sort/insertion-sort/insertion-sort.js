function insertionSort(originalArray) {
  const array = [...originalArray];

  // Loop froward from the first element
  for (let i = 1; i < array.length; i++) {
    // Keep the i element
    let temp = array[i];

    // Loop back from the i element
    for (j = i - 1; j >= 0 && array[j] > temp; j--) {
      // if current element is bigger than i element
      // shift it to the right place
      array[j + 1] = array[j];
    }

    // fill the last empty place with i element
    array[j + 1] = temp;
  }

  return array;
}

module.exports = insertionSort;
