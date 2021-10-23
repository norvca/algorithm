const Graph = require('./graph');

describe('addVertex', () => {
  test('add vertex', () => {
    const graph = new Graph();
    graph.addVertex('A');

    expect(graph.adjacencyList['A']).toEqual([]);
  });

  test('add the same vertex, return undefined', () => {
    const graph = new Graph();
    expect(graph.addVertex('A')).toBe(graph);
    expect(graph.addVertex('A')).toBeUndefined();
  });
});

describe('addEdge', () => {
  test('add edge to 2 vertex', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');

    expect(graph.adjacencyList['A']).toContain('B');
    expect(graph.adjacencyList['B']).toContain('A');
  });

  test('add edge to undefined vertex, return false', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');

    expect(graph.addEdge('A', 'C')).toBe(false);
    expect(graph.adjacencyList['A']).not.toContain('C');
  });
});

describe('removeEdge', () => {
  test('remove edge from 2 vertex', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');
    expect(graph.adjacencyList['A']).toContain('B');
    expect(graph.adjacencyList['B']).toContain('A');

    graph.removeEdge('A', 'B');
    expect(graph.adjacencyList['A']).not.toContain('B');
    expect(graph.adjacencyList['B']).not.toContain('A');
  });

  test('remove edge from undefined vertex, return false', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');

    expect(graph.removeEdge('A', 'C')).toBe(false);
  });
});

describe('removeVertex', () => {
  let graph;
  beforeEach(() => {
    graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('A', 'D');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'D');
  });

  test('remove non exist vertex, return undefined', () => {
    expect(graph.removeVertex('E')).toBeUndefined();
  });

  test('remove a vertex', () => {
    expect(graph.adjacencyList['A']).toContain('B');
    expect(graph.adjacencyList['A']).toContain('C');
    expect(graph.adjacencyList['A']).toContain('D');

    graph.removeVertex('D');
    expect(graph.adjacencyList['A']).not.toContain('D');
    expect(graph.adjacencyList['D']).toBeUndefined();
  });
});
