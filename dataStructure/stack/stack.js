class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return this;
    }

    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return this;
  }

  // ===== Test Methods =======
  static fromValues(...values) {
    const stack = new Stack();
    values.forEach(value => stack.push(value));
    return stack;
  }
}

module.exports = Stack;
