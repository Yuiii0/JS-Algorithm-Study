class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    const newNode = new Node(val);
    //맨뒤에서 삽입(push)
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  //맨 앞에서 삭제
  dequeue() {
    if (!this.first) return null;

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
