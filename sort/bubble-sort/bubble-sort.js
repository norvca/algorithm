function bubbleSort(array) {
  const sortedArr = [...array];

  // 4. Each loop we'll ignore the last item
  // cause it's already the biggest one
  for (let i = sortedArr.length - 1; i > 0; i--) {
    // 3. loop every item and try swap
    // so the biggest item will float to the top like a bubble
    for (let j = 0; j < i; j++) {
      // 1. if current is bigger than the next item,
      if (sortedArr[j] > sortedArr[j + 1]) {
        // 2. swap it
        let temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;
      }
    }
  }

  return sortedArr;
}

module.exports = bubbleSort;
