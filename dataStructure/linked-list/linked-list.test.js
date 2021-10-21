const LinkedList = require('./linked-list');

describe('push', () => {
  test('no node', () => {
    const ll = new LinkedList();
    ll.push(1);

    expect(ll.head.value).toBe(1);
    expect(ll.tail.value).toBe(1);
    expect(ll.length).toBe(1);
  });

  test('has node', () => {
    const ll = LinkedList.fromValues(2);
    ll.push(3);

    expect(ll.head.value).toBe(2);
    expect(ll.tail.value).toBe(3);
    expect(ll.length).toBe(2);
  });
});

describe('pop', () => {
  test('no node', () => {
    const ll = new LinkedList();
    ll.pop();

    expect(ll.head).toBeNull();
    expect(ll.tail).toBeNull();
    expect(ll.length).toBe(0);
  });

  test('one node', () => {
    let ll = LinkedList.fromValues(2);
    ll.pop();

    expect(ll.head).toBeNull();
    expect(ll.tail).toBeNull();
    expect(ll.length).toBe(0);
  });

  test('multiple nodes', () => {
    const ll = LinkedList.fromValues(3, 5, 2);
    ll.pop();

    expect(ll.head.value).toBe(3);
    expect(ll.tail.value).toBe(5);
    expect(ll.length).toBe(2);
  });
});

describe('unshift', () => {
  test('no node', () => {
    const ll = new LinkedList();
    ll.unshift(1);

    expect(ll.head.value).toBe(1);
    expect(ll.tail.value).toBe(1);
    expect(ll.length).toBe(1);
  });

  test('has node', () => {
    const ll = LinkedList.fromValues(3, 6, 8, 2);

    ll.unshift(1);
    expect(ll.head.value).toBe(1);
    expect(ll.tail.value).toBe(2);
    expect(ll.length).toBe(5);
  });
});

describe('shift', () => {
  test('no node', () => {
    const ll = new LinkedList();
    ll.shift();

    expect(ll.head).toBeNull();
    expect(ll.tail).toBeNull();
    expect(ll.length).toBe(0);
  });

  test('one node', () => {
    const ll = LinkedList.fromValues(2);
    ll.shift();

    expect(ll.head).toBeNull();
    expect(ll.tail).toBeNull();
    expect(ll.length).toBe(0);
  });

  test('multiple nodes', () => {
    const ll = LinkedList.fromValues(2, 3, 4, 5);

    ll.shift();
    expect(ll.head.value).toBe(3);
    expect(ll.tail.value).toBe(5);
    expect(ll.length).toBe(3);

    ll.shift();
    expect(ll.head.value).toBe(4);
    expect(ll.tail.value).toBe(5);
    expect(ll.length).toBe(2);
  });
});

describe('get', () => {
  const ll = LinkedList.fromValues(2, 3, 4, 5);
  test('index < 0, return undefined', () => {
    expect(ll.get(-1)).toBe(undefined);
  });
  test('index > ll.length, return undefined', () => {
    expect(ll.get(4)).toBe(undefined);
  });
  test('input index, return the node', () => {
    expect(ll.get(2).value).toBe(4);
  });
});

describe('set', () => {
  const ll = LinkedList.fromValues(2, 3, 4, 5);
  test('index < 0, return undefined', () => {
    expect(ll.set(-1, 100)).toBe(undefined);
  });
  test('index > ll.length, return undefined', () => {
    expect(ll.set(4, 100)).toBe(undefined);
  });
  test('input index, reset the value of current node', () => {
    ll.set(2, 100);
    expect(ll.get(2).value).toBe(100);
  });
});

describe('insert', () => {
  let ll;
  beforeEach(() => {
    ll = LinkedList.fromValues(2, 3, 4, 5);
  });

  test('index < 0, return undefined', () => {
    expect(ll.insert(-1, 100)).toBe(undefined);
  });

  test('index > ll.length, return undefined', () => {
    expect(ll.insert(5, 100)).toBe(undefined);
  });

  test('index === 0', () => {
    ll.insert(0, 100);
    expect(ll.get(0).value).toBe(100);
    expect(ll.get(0).next.value).toBe(2);
    expect(ll.length).toBe(5);
  });

  test('index === ll.length', () => {
    ll.insert(4, 100);
    expect(ll.get(4).value).toBe(100);
    expect(ll.get(4).next).toBeNull();
    expect(ll.length).toBe(5);
  });

  test('normal insert', () => {
    ll.insert(2, 100);
    expect(ll.get(2).value).toBe(100);
    expect(ll.get(2).next.value).toBe(4);
    expect(ll.length).toBe(5);
  });
});

describe('remove', () => {
  let ll;
  beforeEach(() => {
    ll = LinkedList.fromValues(5, 6, 7, 8);
  });

  test('index < 0, return undefined', () => {
    expect(ll.remove(-1)).toBe(undefined);
  });

  test('index >= ll.length, return undefined', () => {
    expect(ll.remove(4)).toBe(undefined);
  });

  test('index = 0, remove the first node', () => {
    ll.remove(0);
    expect(ll.get(0).value).toBe(6);
    expect(ll.length).toBe(3);
  });

  test('normal remove', () => {
    ll.remove(1);
    expect(ll.get(0).value).toBe(5);
    expect(ll.get(1).value).toBe(7);
    expect(ll.length).toBe(3);
  });
});

describe('reverse', () => {
  test('no node', () => {
    let ll = new LinkedList();
    expect(ll.reverse()).toBe(ll);
  });

  test('reverse the linked list', () => {
    let ll = LinkedList.fromValues(1, 2, 3, 4);
    ll.reverse();

    expect(ll.head.value).toBe(4);
    expect(ll.head.next.value).toBe(3);
    expect(ll.tail.value).toBe(1);
    expect(ll.tail.next).toBeNull();
  });
});
