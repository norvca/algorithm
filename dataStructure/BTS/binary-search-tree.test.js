const BTS = require('./binary-search-tree');

describe('insert', () => {
  test('no node', () => {
    const bts = new BTS();
    bts.insert(100);

    expect(bts.root.value).toBe(100);
  });

  test('has node', () => {
    const bts = new BTS();
    bts.insert(3);
    bts.insert(6);
    bts.insert(6);
    bts.insert(2);
    bts.insert(4);
    bts.insert(10);

    expect(bts.root.value).toBe(3);
    expect(bts.root.left.value).toBe(2);
    expect(bts.root.right.value).toBe(6);
    expect(bts.root.right.left.value).toBe(4);
    expect(bts.root.right.right.value).toBe(10);
  });
});

describe('contains', () => {
  test('if no root, return false', () => {
    const bts = new BTS();

    expect(bts.contains(100)).toBe(false);
  });

  test('if bts contains value', () => {
    const bts = BTS.fromValues(11, 22, 33, 44, 55);

    expect(bts.contains(1)).toBe(false);
    expect(bts.contains(11)).toBe(true);
    expect(bts.contains(55)).toBe(true);
    expect(bts.contains(100)).toBe(false);
    expect(bts.contains(500)).toBe(false);
  });
});

describe('findMin and findMax', () => {
  test('find the smallest value', () => {
    const bts = BTS.fromValues(33, 21, 63, 26);

    expect(bts.findMin()).toBe(21);
  });

  test('find the biggest value', () => {
    const bts = BTS.fromValues(33, 21, 63, 26);

    expect(bts.findMax()).toBe(63);
  });
});
