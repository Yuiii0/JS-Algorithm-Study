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

  //재귀형
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList; //오류

    function dfs(vertex) {
      if (!vertex) return null;
      //1.방문 처리
      visited[vertex] = true;
      //2.결과리스트에 저장
      result.push(vertex);
      //3. 인접리스트 확인 (방문안한노드가 있으면, 순서대로 방문)
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          //첫 방문노드만
          return dfs(neighbor); //recursive
        }
      });
    }
    dfs(start);
    return result;
  }

  //순환형
  depthFirstIterative(start) {
    const stack = [start]; //start가 push된 상태로 초기화
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
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
