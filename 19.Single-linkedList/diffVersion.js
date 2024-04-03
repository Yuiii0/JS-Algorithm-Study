class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//tail을 사용하지 않는 방식, get(),set() 이런거없음
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //push
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      //마지막 노드를 찾고, 마지막 노드의 next에 새로운 노드
      let current = this.head;
      while (current.next) {
        current = current.next; //순회를 마치면, current=마지막노드가 될것이다.
      }
      current.next = newNode;
    }
    this.size++;
  }

  //unShift
  prepend(data) {
    const newNode = new Node(data);
    //새로운 노드 다음에 기존 head를 linking
    newNode.next = this.head;
    //head 업데이트
    this.head = newNode;
    this.size++;
  }

  //중간 삽입
  insertAt(data, index) {
    //index 유효성 검사
    if (index < 0 && index > this.size) {
      return;
    }

    if (index === 0) this.prepend();
    if (index === this.length) this.append();

    const newNode = new Node(data);

    let current, prev;

    current = this.head;
    let count = 0;

    while (count < index) {
      //index에 접근하기전까지 한칸씩 이동
      prev = current;
      current = current.next;
      count++;
    }
    //해당 index에 도달하면
    newNode.next = current; //기존노드
    prev.next = newNode;

    this.size++;
  }

  //해당 index의 data 찾기
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current.data;
      }
      count++;
      current = current.next;
    }
    return null;
  }

  //데이터로 삭제
  remove(data) {
    let current = this.head;
    let prev = null;

    while (current) {
      //삭제할 노드를 찾은경우
      if (current.data === data) {
        if (!prev) {
          //삭제할 노드가 첫번째 노드일때: 다음노드를 head로 업데이트
          this.head = current.next;
        } else {
          //중간이나 마지막노드
          prev.next = current.next;
        }

        this.size--;
        return current.data; //삭제한 노드
      }
      //한칸씩 이동 (prev,current)
      prev = current;
      current = current.next;
    }
    return null; //삭제할 노드가 없음
  }

  //인덱스로 삭제
  removeAt(index) {
    if (index < 0 || index > this.length) return;

    let current = this.head;
    let prev;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        prev = current;
        current = current.next;
      }
      //count=index 도달
      prev.next = current.next;
    }

    this.size--;
  }
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //data가 존재하는지?
  find(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  print() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.data + "->";
      current = current.next; //이동
    }
    result += "null";
    console.log(result);
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}
