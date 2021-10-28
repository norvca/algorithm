const selectionSort = require('./selection-sort');

test('selectionSort', () => {
  const array = [20, 30, 10, 5, 900, 0, -10, 5, 80];
  const sortedArr = selectionSort(array);
  expect(sortedArr).toEqual([-10, 0, 5, 5, 10, 20, 30, 80, 900]);
});
