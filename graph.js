class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex){
        this.adjacencyList[vertex] = []
    }
}

const g = new Graph()
g.addVertex('USA')
console.log(g)