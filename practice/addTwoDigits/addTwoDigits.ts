function addTwoDigits(n: any): number {
  const numArr = n.toString().split('');
  return Number(numArr[0]) + Number(numArr[1]);
}

console.log(addTwoDigits(29));
