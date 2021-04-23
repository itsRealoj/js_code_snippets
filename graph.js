class Graph {
 constructor(){
     this.adjacencyList = {};
 }

 addVertex(vertex) {
     this.adjacencyList[vertex] = [];
 }

 addEdge(edge, val){
    this.adjacencyList[edge].push(val)
 }

}

const g = new Graph();
g.addVertex('MON')
g.addVertex('TUE')
g.addVertex('WED')

g.addEdge('TUE', 2)
g.addEdge('MON', 10)

console.log(g)
console.log(g.addVertex)
