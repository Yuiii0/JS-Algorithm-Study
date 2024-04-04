class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; //->
      newNode.prev = this.tail; //<-
      this.tail = newNode; //tail 업데이트
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail; //1.변수에 저장

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev; //2.tail 업데이트
      this.tail.next = null; //-> 끊어내기
      poppedNode.prev = null; //<- 끊어내기 (pop했을때 prev가 존재하는 문제발생: 한바퀴 순회 가능ㅋ)
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    const oldHead = this.head; //1. 변수에 저장

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next; //2. head 업데이트
      this.head.prev = null; //<- 끊어내기
      oldHead.next = null; //-> 끊어내기
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode; //1. 새로운 노드 삽입 <- link
      newNode.next = this.head; //2. -> link
      this.head = newNode; //3. head 업데이트
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, current;

    //왼쪽부터 순회
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;

      while (count !== index) {
        current = current.next; //오른쪽으로 이동
        count++;
      }
    } //오른쪽부터 순회
    else {
      count = this.length - 1;
      current = this.tail;

      while (count !== index) {
        current = current.prev; //왼쪽으로 이동
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    const founedNode = this.get(index);
    if (founedNode != null) {
      founedNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    const newNode = new Node(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode; //<-
    newNode.prev = beforeNode; //->
    newNode.next = afterNode; //->
    afterNode.prev = newNode; //<-

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);

    removedNode.prev.next = removedNode.next; //-> 새로 연결
    removedNode.next.prev = removedNode.prev; //<- 새로 연결
    //삭제노드 양쪽 연결 끊기
    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }

  reverse() {
    if (this.length < 2) return this; //그대로

    let current = this.head;
    this.tail = this.head; //tail 업데이트

    while (current !== null) {
      //prev와 next swap
      let prev = current.prev; //임시 변수: 초기값 = null
      current.prev = current.next;
      current.next = prev;

      if (current.prev === null) {
        //현재노드가 새로운 head
        this.head = current;
      }
      current = current.prev;
    }
    return this;
  }
}
