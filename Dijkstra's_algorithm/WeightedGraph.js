class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight: weight });
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push({ node: vertex1, weight: weight });
    }
  }
  
}


var graph=new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A","B",9);
graph.addEdge("A","C",5);
graph.addEdge("B","C",7);
