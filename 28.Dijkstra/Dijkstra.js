//simple priority Queue 버전, binary heap 사용하는것이 더 효율적
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {}; //흐름을 파악할 수 있게해주는 이전값이 담긴 배열로 구성
    let path = []; //return할 배열
    let smallest; //최단거리 노드

    //initial state
    for (let vertex in this.adjacencyList) {
      //vertex=모든 노드들 순회하면서,
      //distances 초기화 & queue 삽입
      if (vertex === start) {
        //start 노드
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        //Infinity로 start 노드가 가장 최우선이 되도록
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null; //previous는 모든 node가 null
    }
    // 초기값
    // console.log("distances", distances);
    // console.log("previous", previous);
    // console.log("nodes", nodes);

    //아직 queue에 남아있는 노드가 있다면 무한반복
    while (nodes.values.length) {
      smallest = nodes.dequeue.val; //최단거리 노드 선택 ('A')
      if (smallest === finish) {
        //done!
        //return하기위한 path 만들기위해 finish 노드부터 previous를 확인해야함

        while (previous[smallest]) {
          //null(start)를 만나기전까지 무한반복
          path.push(smallest); //E-F-D-C
          smallest = previous[smallest]; //F-D-C-A-null(업데이트해줌)
        }
        console.log(path); //[E-F-D-C]
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //console.log("smallest", smallest);
          // console.log("네이버", this.adjacencyList[smallest]);
          //console.log("네이버i", neighbor); //객체가 아닌 왜 숫자로 나오는지?

          //neighboring node 찾기
          let nextNode = this.adjacencyList[neighbor];
          // console.log(nextNode);

          //calculate distances 새로운 인접 노드
          let candidate = distances[smallest] + nextNode.weight; //인접노드값 거리
          let nextNeighbor = nextNode.node;

          if (candidate < distances[nextNeighbor]) {
            //업데이트 distance
            distances[nextNeighbor] = candidate;
            //업데이트 previous
            previous[nextNeighbor] = smallest;
            //enqueue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.Dijkstra("A", "E");
