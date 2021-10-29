class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BTS {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;
    while (true) {
      // if node's value is already in the tree, do nothing
      if (newNode.value === temp.value) {
        return this;
      }

      // if node's value is less than temp's value
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        // if node's value is greater than temp value
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(value) {
    let temp = this.root;

    while (temp) {
      if (value === temp.value) {
        return true;
      }

      if (value < temp.value) {
        temp = temp.left;
      } else {
        temp = temp.right;
      }
    }

    return false;
  }

  findMin() {
    let temp = this.root;
    while (temp.left) {
      temp = temp.left;
    }

    return temp.value;
  }

  findMax() {
    let temp = this.root;
    while (temp.right) {
      temp = temp.right;
    }

    return temp.value;
  }

  BFS() {
    let currentNode = this.root;
    const queue = [];
    const result = [];
    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      result.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return result;
  }

  DFSPreOrder() {
    const result = [];

    function traversal(currentNode) {
      result.push(currentNode.value);
      if (currentNode.left) traversal(currentNode.left);
      if (currentNode.right) traversal(currentNode.right);
    }
    traversal(this.root);

    return result;
  }

  DFSPostOrder() {
    const result = [];

    function traversal(currentNode) {
      if (currentNode.left) traversal(currentNode.left);
      if (currentNode.right) traversal(currentNode.right);
      result.push(currentNode.value);
    }
    traversal(this.root);

    return result;
  }

  DFSInOrder() {
    const result = [];

    function traversal(currentNode) {
      if (currentNode.left) traversal(currentNode.left);
      result.push(currentNode.value);
      if (currentNode.right) traversal(currentNode.right);
    }
    traversal(this.root);

    return result;
  }

  // ===== Test Methods =======
  static fromValues(...values) {
    const bts = new BTS();
    values.forEach(value => bts.insert(value));
    return bts;
  }
}

module.exports = BTS;
