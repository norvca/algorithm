const insertionSort = require('./insertion-sort');

test('insertionSort', () => {
  const array = [20, 30, 10, 5, 900, 0, -10, 5, 80];
  const sortedArr = insertionSort(array);
  expect(sortedArr).toEqual([-10, 0, 5, 5, 10, 20, 30, 80, 900]);
});
