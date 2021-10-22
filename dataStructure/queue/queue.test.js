const Queue = require('./queue');

describe('enqueue', () => {
  test('no node', () => {
    const queue = new Queue();

    expect(queue.first).toBeNull;
    expect(queue.last).toBeNull;
    expect(queue.length).toBe(0);

    queue.enqueue(100);
    expect(queue.first.value).toBe(100);
    expect(queue.last.value).toBe(100);
    expect(queue.length).toBe(1);
  });

  test('has node', () => {
    const queue = new Queue();
    queue.enqueue(100);
    queue.enqueue(200);

    expect(queue.last.value).toBe(200);
    expect(queue.length).toBe(2);
  });
});

describe('dequeue', () => {
  test('no node', () => {
    const queue = new Queue();
    queue.dequeue();

    expect(queue.first).toBeNull();
    expect(queue.last).toBeNull();
    expect(queue.length).toBe(0);
  });

  test('one node', () => {
    const queue = Queue.fromValues(100);
    queue.dequeue();

    expect(queue.first).toBeNull();
    expect(queue.last).toBeNull();
    expect(queue.length).toBe(0);
  });

  test('multiple nodes', () => {
    const queue = Queue.fromValues(2, 3, 4, 5);
    expect(queue.first.value).toBe(2);
    queue.dequeue();

    expect(queue.first.value).toBe(3);
    expect(queue.length).toBe(3);
  });
});
