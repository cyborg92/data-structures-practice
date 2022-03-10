class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  // In add vertex we are just creating a new key in a adjacency list whose value is empty array.
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  // In add edge, we need to vertex, 1 and 2 where vertex 1 is from which there is connection/edge to vertex 2.
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push(vertex2);
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].filter((vertex) => vertex !== vertex2);
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].filter((vertex) => vertex !== vertex1);
    }
  }
  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      while (this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(this.adjacencyList[vertex], adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }
  }
}

let newGraph = new Graph();
newGraph.addVertex("Dallas");
newGraph.addVertex("Tokyo");
newGraph.addVertex("Aspen");
newGraph.addVertex("Los Angeles");
newGraph.addVertex("Hong Kong")
newGraph.addEdge("Dallas", "Tokyo");
newGraph.addEdge("Dallas", "Aspen");
newGraph.addEdge("Hong Kong", "Tokyo");
newGraph.addEdge("Hong Kong", "Dallas");
newGraph.addEdge("Los Angeles", "Hong Kong");
newGraph.addEdge("Los Angeles", "Aspen");