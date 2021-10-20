class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length !== 0) {
      newNode.next = this.top;
    }

    this.top = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return this;

    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;

    this.length--;
    return this;
  }
}

const stack = new Stack(1);
