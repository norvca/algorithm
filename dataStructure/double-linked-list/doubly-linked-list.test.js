const DoublyLinkedList = require('./doubly-linked-list');

describe('push', () => {
  test('no node ', () => {
    const dll = new DoublyLinkedList();
    dll.push(2);

    expect(dll.head.value).toBe(2);
    expect(dll.tail.value).toBe(2);
    expect(dll.length).toBe(1);
  });

  test('has node', () => {
    const dll = new DoublyLinkedList();
    dll.push(2);
    dll.push(3);

    expect(dll.tail.value).toBe(3);
    expect(dll.tail.prev.value).toBe(2);
    expect(dll.length).toBe(2);
  });
});

describe('pop', () => {
  test('no node', () => {
    const dll = new DoublyLinkedList();
    dll.pop();

    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
    expect(dll.length).toBe(0);
  });

  test('one node', () => {
    const dll = DoublyLinkedList.fromValues(2);
    dll.pop();

    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
    expect(dll.length).toBe(0);
  });

  test('multiple nodes', () => {
    const dll = DoublyLinkedList.fromValues(2, 3, 4, 5);
    dll.pop();

    expect(dll.tail.value).toBe(4);
    expect(dll.tail.next).toBeNull();
    expect(dll.tail.prev.value).toBe(3);
    expect(dll.length).toBe(3);
  });
});

describe('unshift', () => {
  test('no node', () => {
    const dll = new DoublyLinkedList();
    dll.unshift(2);

    expect(dll.head.value).toBe(2);
    expect(dll.tail.value).toBe(2);
    expect(dll.length).toBe(1);
  });

  test('has node', () => {
    const dll = DoublyLinkedList.fromValues(2, 3, 4);
    dll.unshift(100);

    expect(dll.head.value).toBe(100);
    expect(dll.head.next.value).toBe(2);
    expect(dll.head.prev).toBeNull();
    expect(dll.length).toBe(4);
  });
});

describe('shift', () => {
  test('no node', () => {
    const dll = new DoublyLinkedList();
    dll.shift();

    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
    expect(dll.length).toBe(0);
  });

  test('one node', () => {
    const dll = DoublyLinkedList.fromValues(2);
    dll.shift();

    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
    expect(dll.length).toBe(0);
  });

  test('multiple nodes', () => {
    const dll = DoublyLinkedList.fromValues(2, 3, 4);
    dll.shift();

    expect(dll.head.value).toBe(3);
    expect(dll.head.prev).toBeNull();
    expect(dll.length).toBe(2);
  });
});

describe('get', () => {
  let dll;
  beforeEach(() => {
    dll = DoublyLinkedList.fromValues(2, 3, 4, 5);
  });

  test('index < 0, return undefined', () => {
    expect(dll.get(-1)).toBeUndefined();
  });

  test('index >= dll.length, return undefined', () => {
    expect(dll.get(4)).toBeUndefined();
  });

  test('index < dll.length / 2, loop from head to tail', () => {
    expect(dll.get(1).value).toBe(3);
  });

  test('index >= dll.length / 2, loop from tail to head', () => {
    expect(dll.get(2).value).toBe(4);
  });
});

describe('set', () => {
  let dll;
  beforeEach(() => {
    dll = DoublyLinkedList.fromValues(2, 3, 4, 5);
  });

  test('index < 0 or index >= dll.length, return undefined', () => {
    expect(dll.set(-1, 100)).toBeUndefined();
    expect(dll.set(4, 100)).toBeUndefined();
  });

  test('input the index, reset the value of node', () => {
    expect(dll.get(1).value).toBe(3);
    dll.set(1, 100);
    expect(dll.get(1).value).toBe(100);
  });
});

describe('insert', () => {
  let dll;
  beforeEach(() => {
    dll = DoublyLinkedList.fromValues(2, 3, 4, 5);
  });

  test('index < 0 or index > dll.length, return undefined', () => {
    expect(dll.insert(-1, 100)).toBeUndefined();
    expect(dll.insert(5, 100)).toBeUndefined();
  });

  test('index === 0', () => {
    dll.insert(0, 100);
    expect(dll.head.value).toBe(100);
    expect(dll.head.next.value).toBe(2);
    expect(dll.length).toBe(5);
  });

  test('index === this.length', () => {
    dll.insert(4, 100);
    expect(dll.tail.value).toBe(100);
    expect(dll.length).toBe(5);
  });

  test('normal insert', () => {
    dll.insert(2, 100);
    expect(dll.get(2).value).toBe(100);
    expect(dll.get(2).prev.value).toBe(3);
    expect(dll.get(2).next.value).toBe(4);
    expect(dll.length).toBe(5);
  });
});

describe('remove', () => {
  let dll;
  beforeEach(() => {
    dll = DoublyLinkedList.fromValues(2, 3, 4, 5);
  });

  test('index < 0 or index >= dll.length, return undefined', () => {
    expect(dll.remove(-1)).toBeUndefined();
    expect(dll.remove(4)).toBeUndefined();
  });

  test('index === 0, remove first', () => {
    dll.remove(0);

    expect(dll.head.value).toBe(3);
    expect(dll.length).toBe(3);
  });

  test('index === this.lenth -1, remove last', () => {
    dll.remove(3);

    expect(dll.tail.value).toBe(4);
    expect(dll.length).toBe(3);
  });

  test('normal remove', () => {
    dll.remove(2);

    expect(dll.get(2).value).toBe(5);
    expect(dll.length).toBe(3);
  });
});
