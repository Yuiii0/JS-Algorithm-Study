class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    //1. 맨뒤에 삽입
    this.heap.push(value);
    //2. heapify
    this.heapifyUp(this.value.length - 1); //n=맨마지막 요소로 시작
  }
  extractMax() {
    const max = this.heap[0];
    this.heap[0] = this.heap.pop(); //마지막요소 root로 이동
    this.heapifyDown(0); //n=루트로 시작
    return max;
  }

  heapifyUp(index) {
    let currentIdx = index; //n=맨마지막 요소로 시작
    let parentIdx = Math.floor((currentIdx - 1) / 2);

    while (currentIdx > 0 && this.heap[parentIdx] < this.heap[currentIdx]) {
      //swap(부모와)
      currentIdx = parentIdx; //현재노드가 부모로 올라가고
      parentIdx = Math.floor((currentIdx - 1) / 2); //새로운 부모 구하기
    }
  }
  heapifyDown(index) {
    let currentIdx = index; //초기값은 root
    let leftChildIdx = 2 * index + 1;
    let rightChildIdx = 2 * index + 2;

    if (
      leftChildIdx < this.heap.length &&
      this.heap[leftChildIdx] > this.heap[currentIdx]
    ) {
      //왼쪽 자식과 swap
      currentIdx = leftChildIdx;
    }

    if (
      rightChildIdx < this.heap.length &&
      this.heap[rightChildIdx] > this.heap[currentIdx]
    ) {
      currentIdx = rightChildIdx;
    }

    if (currentIdx !== index) {
      //index가 바뀜=swap해야함
      [this.heap[index], this.heap[currentIdx]] = [
        this.heap[currentIdx],
        this.heap[index],
      ];
      this.heapifyDown(currentIdx); //recursion
    }
  }
  peek() {
    return this.heap[0];
  }
}
