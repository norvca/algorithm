class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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
      this.length = 0;
      return this;
    }

    // if multiple nodes, we use two points to point our nodes
    let point = this.head;
    let nextPoint = this.head;
    while (nextPoint.next) {
      point = nextPoint;
      nextPoint = nextPoint.next;
    }
    this.tail = point;
    this.tail.next = null;
    this.length--;
    return this;
  }

  unshift(value) {
    const newNode = new Node(value);

    // if no node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if has node
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
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
    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    return this;
  }

  get(index) {
    // if index < 0 or index > ll.length, return undefined
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    // if index < 0 or index > ll.length, get method will return undefined
    const temp = this.get(index);

    if (temp) {
      temp.value = value;
      return this;
    }
  }

  insert(index, value) {
    // if index < 0 or index > ll.length, return undefined
    if (index < 0 || index > this.length) {
      return undefined;
    }

    // insert node to the first position
    if (index === 0) {
      return this.unshift(value);
    }

    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    // if index < 0 or index > ll.length, return undefined
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    // remove the first node
    if (index === 0) {
      return this.shift();
    }

    const prevTemp = this.get(index - 1);
    const temp = prevTemp.next;
    prevTemp.next = temp.next;
    temp.next = null;
    this.length--;
    return this;
  }

  reverse() {
    if (!this.head) {
      return this;
    }

    // reverse the pointers head and tail
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    // reverse the nodes next pointer
    let prevTemp = null;
    let nextTemp = temp.next;
    for (let i = 0; i < this.length; i++) {
      // we put this line first, not the last to avoid nextTemp to be null
      nextTemp = temp.next;
      temp.next = prevTemp;
      prevTemp = temp;
      temp = nextTemp;
    }

    return this;
  }

  // ===== Test Methods =======
  static fromValues(...values) {
    const ll = new LinkedList();
    values.forEach(value => ll.push(value));
    return ll;
  }

  // print() {
  //   let output = '';
  //   let current = this.head;
  //   while (current) {
  //     output += `${current.value} -> `;
  //     current = current.next;
  //   }
  //   output += `null`;
  //   console.log(output);
  // }
  // ===== Test Methods =======
}

module.exports = LinkedList;
