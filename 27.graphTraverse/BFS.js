class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []; //if조건문 없이 빈배열 덮어쓰기해도 무관
    }
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1); //방향이 있다면 v1->v2만 만들면 되기때문에 이코드는 작성하지 않는다
  }

  removeEdge(v1, v2) {
    this.addEdge[v1] = this.addEdge[v1].filter((v) => v !== v2);
    this.addEdge[v2] = this.addEdge[v1].filter((v) => v !== v1);
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop(); //연결을 끊어야할 인접vertex
      this.removeEdge(vertex, adjacentVertex); //연결(edge) 끊기
    }
    //연결 모두 끊어내고, 해당 vertex 삭제
    delete this.adjacencyList[vertex];
  }

  breadFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};

    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      //인접 리스트 순회
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.depthFirstIterative("A"));
