class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //맨 앞에서 삽입
  push(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  //맨 앞에서 삭제
  pop() {
    if (!this.head) return null;
    const temp = this.first;
    if (this.first === this.last) {
      //size=1
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
