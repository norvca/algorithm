class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return this;
    }
  }

  addEdge(value1, value2) {
    const vertex1 = this.adjacencyList[value1];
    const vertex2 = this.adjacencyList[value2];

    if (vertex1 && vertex2) {
      vertex1.push(value2);
      vertex2.push(value1);
      return this;
    }

    return false;
  }

  removeEdge(value1, value2) {
    let vertex1 = this.adjacencyList[value1];
    let vertex2 = this.adjacencyList[value2];

    if (vertex1 && vertex2) {
      this.adjacencyList[value1] = vertex1.filter(v => v !== value2);
      this.adjacencyList[value2] = vertex2.filter(v => v !== value1);
      return this;
    }

    return false;
  }

  removeVertex(value) {
    if (!this.adjacencyList[value]) {
      return undefined;
    }

    const vertex = this.adjacencyList[value];

    while (vertex.length) {
      const adjacentValue = vertex.pop();
      this.removeEdge(value, adjacentValue);
    }

    delete this.adjacencyList[value];
    return this;
  }
}

module.exports = Graph;
