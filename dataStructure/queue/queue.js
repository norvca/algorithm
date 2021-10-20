class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
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
    if (this.length === 0) return this;

    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      const temp = this.first;
      this.first = this.first.next;
      temp.next = null;
    }

    this.length--;
    return this;
  }
}

const queue = new Queue(1);
