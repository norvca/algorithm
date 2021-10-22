class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return this;
    }

    if (this.length === 1) {
      this.first = null;
      this.last = null;
      this.length--;
      return this;
    }

    const temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length--;
    return this;
  }

  // ===== Test Methods =======
  static fromValues(...values) {
    const queue = new Queue();
    values.forEach(value => queue.enqueue(value));
    return queue;
  }
}

module.exports = Queue;
