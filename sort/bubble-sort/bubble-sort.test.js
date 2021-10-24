const bubbleSort = require('./bubble-sort');

test('bubbleSort', () => {
  const array = [20, 30, 10, 900, 0, -10, 5, 80];
  const sortedArr = bubbleSort(array);
  expect(sortedArr).toEqual([-10, 0, 5, 10, 20, 30, 80, 900]);
});
