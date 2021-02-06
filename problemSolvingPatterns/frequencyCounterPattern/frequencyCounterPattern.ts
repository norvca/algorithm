function maxSubArraySum(numArr: number[], val: number): number {
  let maxNum = 0;
  for (let i = 0; i < val; i++) {
    maxNum += numArr[i];
  }

  return maxNum;
}
