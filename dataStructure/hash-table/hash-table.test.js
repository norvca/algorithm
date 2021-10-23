const HashTable = require('./hash-table');

describe('hash table', () => {
  test('set and get', () => {
    const ht = new HashTable(7);
    ht.set('Tom', 18);
    ht.set('Jane', 22);
    ht.set('Jasmine', 24);

    expect(ht.get('Tom')).toBe(18);
    expect(ht.get('Jane')).toBe(22);
    expect(ht.get('Jasmine')).toBe(24);
    expect(ht.get('Jack')).toBeUndefined();

    ht.set('Tom', 33);
    expect(ht.get('Tom')).toBe(33);
  });

  test('keys', () => {
    const ht = new HashTable(7);
    ht.set('Tom', 18);
    ht.set('Jane', 22);
    ht.set('Jack', 33);

    expect(ht.keys().sort()).toEqual(['Tom', 'Jane', 'Jack'].sort());
  });

  test('remove', () => {
    const ht = new HashTable(7);
    ht.set('Tom', 18);
    ht.set('Jane', 22);
    ht.set('Jack', 33);
    ht.remove('Tom');

    expect(ht.get('Tom')).toBeUndefined();
    expect(ht.get('Jane')).toBe(22);
    expect(ht.get('Jack')).toBe(33);
    expect(ht.remove('NoName')).toBeUndefined();
    expect(ht.remove('Jasmine')).toBeUndefined();
  });
});
