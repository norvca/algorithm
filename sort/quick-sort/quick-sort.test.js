const { quickSort, partition } = require('./quick-sort');

test('quickSort', () => {
  const array = [20, 30, 10, 5, 900, 0, -10, 5, 80];
  const sortedArr = quickSort(array);
  expect(sortedArr).toEqual([-10, 0, 5, 5, 10, 20, 30, 80, 900]);
});

test('partition', () => {
  const array = [2, 1, 3];
  const swapIndex = partition(array);

  expect(swapIndex).toBe(1);
  expect(array).toEqual([1, 2, 3]);
});
