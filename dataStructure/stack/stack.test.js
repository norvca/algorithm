const Stack = require('./stack');

describe('push', () => {
  test('no node', () => {
    const stack = new Stack();
    stack.push(100);

    expect(stack.top.value).toBe(100);
    expect(stack.top.next).toBeNull();
    expect(stack.length).toBe(1);
  });

  test('has node', () => {
    const stack = new Stack();
    stack.push(100);
    stack.push(200);

    expect(stack.top.value).toBe(200);
    expect(stack.top.next.value).toBe(100);
    expect(stack.length).toBe(2);
  });
});

describe('pop', () => {
  test('no node', () => {
    const stack = new Stack();
    stack.pop();

    expect(stack.top).toBeNull();
    expect(stack.length).toBe(0);
  });

  test('one node', () => {
    const stack = Stack.fromValues(1);
    stack.pop();

    expect(stack.top).toBeNull();
    expect(stack.length).toBe(0);
  });

  test('multiple nodes', () => {
    const stack = Stack.fromValues(2, 3, 4);
    expect(stack.top.value).toBe(4);
    expect(stack.length).toBe(3);

    stack.pop();
    expect(stack.top.value).toBe(3);
    expect(stack.length).toBe(2);

    stack.pop();
    expect(stack.top.value).toBe(2);
    expect(stack.length).toBe(1);
  });
});
