function adjacentElementsProduct(inputArray: number[]): number {
  let largestProduct = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length; i++) {
    const product = inputArray[i] * inputArray[i + 1];

    largestProduct = product > largestProduct ? product : largestProduct;
  }

  return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
