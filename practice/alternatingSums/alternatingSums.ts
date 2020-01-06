function alternatingSums(a: number[]): number[] {
  const arr = [0, 0];

  a.forEach((el, index) => {
    index % 2 === 0 ? (arr[0] += el) : (arr[1] += el);
  });

  return arr;
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
