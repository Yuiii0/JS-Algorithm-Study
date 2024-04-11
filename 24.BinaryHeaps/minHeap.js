class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }
  extractMin() {
    if (this.heap.length === 0) return "Heap is empty";
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heapifyDown(0);
    return min;
  }
  heapifyUp(index) {
    let currentIdx = index;

    while (currentIdx > 0) {
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      if (this.heap[currentIdx] < this.heap[parentIdx]) {
        //swap
        [this.heap[currentIdx], this.heap[parentIdx]] = [
          this.heap[parentIdx],
          this.heap[currentIdx],
        ];
      } else {
        break;
      }
    }
  }
  heapifyDown(index) {
    let smallest = index;
    const leftChildIdx = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;

    if (
      leftChildIdx < this.heap.length &&
      this.heap[leftChildIdx] < this.heap[smallest]
    ) {
      smallest = leftChildIdx;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] < this.heap[smallest]
    ) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      //swap
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];

      this.heapifyDown(smallest); //recursion
    }
  }
}
