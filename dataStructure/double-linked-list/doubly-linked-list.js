class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    // if no node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if has node
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    // if no node
    if (!this.head) {
      return this;
    }

    // if one node
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }

    // if multiple nodes
    const temp = this.tail;
    this.tail = temp.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
    return this;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return this;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }

    const temp = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    temp.next = null;
    this.length--;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let temp;

    // if index < dll.length / 2
    // loop from head to tail
    if (index < this.length / 2) {
      temp = this.head;
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      // if index >= dll.length / 2
      // loop from tail to head
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }

    return temp;
  }

  set(index, value) {
    const temp = this.get(index);

    if (temp) {
      temp.value = value;
      return this;
    }
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return undefined;
    }

    if (index === 0) {
      return this.unshift(value);
    }

    if (index === this.length) {
      return this.push(value);
    }

    const newNode = new Node(value);
    const prevTemp = this.get(index - 1);
    const temp = prevTemp.next;

    prevTemp.next = newNode;
    newNode.next = temp;
    newNode.prev = prevTemp;
    temp.prev = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    if (index < 0 || index >= this.length) {
      return undefined;
    }

    const temp = this.get(index);

    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.prev = null;
    temp.next = null;

    this.length--;
    return this;
  }

  // ===== Test Methods =======
  static fromValues(...values) {
    const dll = new DoublyLinkedList();
    values.forEach(value => dll.push(value));
    return dll;
  }
  // ===== Test Methods =======
}

module.exports = DoublyLinkedList;
