// Git add
class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]){
      this.adjList[vertex] = [];
    }
    else {
      return null;
    }
  }

  addEdges(srcValue, destValue) {
    if (!this.adjList[srcValue]){
      this.adjList[srcValue] = [];
    }
    if (!this.adjList[destValue]){
      this.adjList[destValue] = [];
    }

    if (!this.adjList[srcValue].includes(destValue)){
      this.adjList[srcValue].push(destValue);
    }
    if (!this.adjList[destValue].includes(srcValue)){
      this.adjList[destValue].push(srcValue);
    }
  }

  buildGraph(edges) {
    let newGraph = new Graph();
    console.edges;
    edges.forEach(element => {
      newGraph.addEdges(element[0], element[1]);
    })


    return newGraph.adjList;
  }

  breadthFirstTraversal(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
  }

}

// let testGraph = new Graph();
// testGraph.addEdges('f', 'a')
// //expect { 'f': ['a'], 'a': ['f'] }
// console.log(testGraph);

module.exports = {
  Graph
};
