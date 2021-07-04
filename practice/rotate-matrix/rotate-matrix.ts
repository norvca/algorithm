// Time complexity: O(n ^2)
// We use a loop inside a loop, so it's O(n ^2)

// Space complexity:
// We use a temp to store a number, so it's O(1)

// Solution
// - Reverse the outer array
// - For each row
//   - For each column
//   - Flip the coordinates of it's value

type Matrix = number[][];

const inputMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotateMatrix(matrix: Matrix) {
  matrix.reverse();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  return matrix;
}

rotateMatrix(inputMatrix);
