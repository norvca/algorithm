const mergeSort = require('./merge-sort');

test('mergeSort', () => {
  const array = [20, 30, 10, 5, 900, 0, -10, 5, 80];
  const sortedArr = mergeSort(array);
  expect(sortedArr).toEqual([-10, 0, 5, 5, 10, 20, 30, 80, 900]);
});
