// Time complexity: O(N)
// Space complexity: O(1)

function maxSubArraySum(arr: number[], num: number): number | null {
  let maxSum = 0;
  let tempSum = 0;

  if (num > arr.length || num < 0) {
    return null;
  }

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    const firstNumInSlideArr = arr[i - num];
    const nextNumOfSlideArr = arr[i];
    tempSum = tempSum - firstNumInSlideArr + nextNumOfSlideArr;
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

maxSubArraySum([2, 6, 6, 8, 4, 1, 3, 7, 4], 3);
