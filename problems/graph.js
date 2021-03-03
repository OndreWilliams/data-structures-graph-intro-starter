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
      let queue = [startingVertex];
      let result = [];
      let visited = new Set();

      while(queue.length >= 1){
          let currentVertex = queue.shift();
          result.push(currentVertex);
          visited.add(currentVertex);
          if(this.adjList[currentVertex]){
              this.adjList[currentVertex].forEach(neighbor => {
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    // console.log("ADDING ", currentVertex, " to visited");
                    queue.push(neighbor);
                }
              });
          }
      }
      return result;
  }

  // ['a', ['b', 'c', 'd']]
  // ['d', ['g']]
  // ['b', ['c', 'e']]
  // ['c', ['f', 'g']]
  // ['f', ['g']]
  // ['h']
  //'a', 'b', 'c', 'd', 'e', 'f', 'g'

  depthFirstTraversalIterative(startingVertex) {
    // let result = [];
    // let visited = new Set();
    // visited.add(startingVertex);
    // result.push(startingVertex);
    // for(let i = this.adjList[startingVertex].length -1; i > 0; i--){
    //   let neighbor = this.adjList[i];
    //   // visited.add(neighbor);
    //     // if (!result.includes(neighbor)){
    //     //   result.push(neighbor);
    //     // }
    //     for(let j = this.adjList[neighbor].length -1; j > 0; j--){
    //       console.log(this.adjList[neighbor][j])
    //       // visited.add(neighbor[i]);
    //       // if (!result.includes(neighbor[i])){
    //       //   result.push(this.adjList[neighbor[i]]);
    //       // }
    //     }
    //     // this.adjList[neighbor].forEach (neighbor =>{
    //     //   visited.add(neighbor);
    //     //   if (!result.includes(neighbor)){
    //     //     result.push(neighbor);
    //     //   }
    //     // })
    //   }
    // return result;




    let queue = [startingVertex];
    let result = [];
    let visited = new Set();

    while(queue.length >= 1){
        let currentVertex = queue.pop();
        result.push(currentVertex);
        visited.add(currentVertex);
        if(this.adjList[currentVertex]){
            this.adjList[currentVertex].forEach(neighbor => {
              if(!visited.has(neighbor)){
                  visited.add(neighbor);
                  // console.log("ADDING ", currentVertex, " to visited");
                  queue.push(neighbor);
              }
            });
        }
    }
    return result;
  }
  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    if(visited.has(startingVertex))
        return vertices;
    vertices.push(startingVertex);
    visited.add(startingVertex);

    for(let i = this.adjList[startingVertex].length - 1; i >= 0; i--){
        this.depthFirstTraversalRecursive(this.adjList[startingVertex][i], visited, vertices);
    }

    // this.adjList[startingVertex].forEach(neighbor => {
    //     this.depthFirstTraversalRecursive(neighbor, visited, )
    // })
    return vertices;
  }

}

// const edges =
// [['a', 'b'],
// ['a', 'c'],
// ['a', 'd'],
// ['d', 'g'],
// ['b', 'c'],
// ['b', 'e'],
// ['c', 'f'],
// ['c', 'g'],
// ['f', 'g'],
// ['h']]
// let testG = new Graph();
// for (let edge of edges) {
//   if (edge.length === 1) {
//     testG.addVertex(edge[0])
//   } else {
//     testG.addEdges(edge[0], edge[1])
//   }
// }

// testG.breadthFirstTraversal("a");
// let testGraph = new Graph();
// testGraph.addEdges('f', 'a')
// //expect { 'f': ['a'], 'a': ['f'] }
// console.log(testGraph);

module.exports = {
  Graph
};
