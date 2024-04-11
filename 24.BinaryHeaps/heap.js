class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1; //초기 idx
    const element = this.values[idx];

    while (idx > 0) {
      //더이상 부모가 root이상으로 올라가지 않도록
      let parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];

      if (element <= parent) break; //swap할필요가 없다. 그 자리에서 정지
      this.values[parentIdx] = element;
      this.values[idx] = parent; //부모와 swap
      idx = parentIdx; //idx 부모와 swap해서 업데이트
    }
  }
  extractMax() {
    //1. max(root) 제거
    const max = this.values[0];

    //2. 맨 마지막요소가 루트로 이동
    const end = this.values.pop();
    if (this.values.length > 0) {
      //계속 요소가 한개 남는걸 방지하기 위해서
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0; //초기값
    const length = this.values.length; //범위 체크를 위해서
    const element = this.values[idx];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        //범위초과하는지 체크
        leftChild = this.values[leftChild];
        if (leftChild > element) {
          swap = leftChildIdx; //left와 swap
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChild];

        if (
          (swap === null && rightChild > element) ||
          (swap !== null && leftChild < rightChild)
        ) {
          //왼쪽child와 swap대상이 아니고, 오른쪽과 swap 대상 || 두 자식 swap대상이고, 오른쪽자식이 더 크면 -> 오른쪽이랑 swap
          swap = rightChildIdx;
        }
        if (swap === null) break; //swap 할 필요가없으면 while문 종료

        //swap!
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap; //자식과 자리 바꾸고 idx 업데이트
      }
    }
  }
}
