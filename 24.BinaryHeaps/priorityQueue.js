class priorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (element.priority >= parent.priority) break; //탈출
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx; //update
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();

    if (this.values > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0; //초기값 root
    const length = this.values.length; //인덱스 범위초과 확인하기위해
    const element = this.values[0];

    //위(root)에서부터 내려가기
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          //swap
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;

      //swap
      this.values[idx] = this.values[swap];
      this.values[swap] = element;

      //idx 업데이트
      idx = swap;
    }
  }
}
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
let ER = new priorityQueue();

ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);
