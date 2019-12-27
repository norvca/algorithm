function addBorder(picture: string[]): string[] {
  const wall = '*'.repeat(picture[0].length + 2);

  const wallPicture = picture.map(el => `*${el}*`);

  return [wall, ...wallPicture, wall];
}

console.log(addBorder(['abc', 'ded']));
