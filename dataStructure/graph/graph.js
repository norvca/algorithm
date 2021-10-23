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

  addEdge(vertex1, vertex2) {
    const vertex1InList = this.adjacencyList[vertex1];
    const vertex2InList = this.adjacencyList[vertex2];

    if (vertex1InList && vertex2InList) {
      vertex1InList.push(vertex2);
      vertex2InList.push(vertex1);
      return this;
    }

    return false;
  }

  removeEdge(vertex1, vertex2) {
    let vertex1InList = this.adjacencyList[vertex1];
    let vertex2InList = this.adjacencyList[vertex2];

    if (vertex1InList && vertex2InList) {
      this.adjacencyList[vertex1] = vertex1InList.filter(v => v !== vertex2);
      this.adjacencyList[vertex2] = vertex2InList.filter(v => v !== vertex1);
      return this;
    }

    return false;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return undefined;
    }

    while (this.adjacencyList[vertex].length) {
      const edgeVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, edgeVertex);
    }

    delete this.adjacencyList[vertex];
    return this;
  }
}

module.exports = Graph;
