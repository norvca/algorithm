// Time complexity: O(n ^ 2)
// We used a for loop in a for loop, so it's O(n ^ 2)

// Space complexity: O(n ^ 2)
// We create a 2D array, so it's O(n ^ 2)

// Solution
// - Create a n X n empty matrix by into number
//   - Create a length of n empty array
//   - For each value in the array, create a length of n empty array
// - Set the current number as 1
// - Dive into the each value of matrix
//   - Set the value as current number
//   - current number increase by 1

function createMatrix(number: number) {
  // Create a matrix of number X number
  let matrix = Array(number);
  for (let i = 0; i < number; i++) {
    matrix[i] = Array(number);
  }

  let currentNumber = 1;
  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      matrix[i][j] = currentNumber++;
    }
  }

  return matrix;
}

createMatrix(3);
// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
