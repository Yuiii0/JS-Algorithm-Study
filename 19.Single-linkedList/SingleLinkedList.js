class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val); //node 생성
    if (!this.head) {
      //맨처음 삽입의 경우 (head,tail=새로운 노드)
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode; //맨 마지막에 새로운 노드 삽입
      this.tail = newNode; //tail 업데이트
    }
    this.length++; //length 업데이트
    return this; //singleLinkedList 반환
  }

  //1.마지막 요소 반환
  //2.새로운 tail 찾아서 업데이트 (뒤에서 2번째 요소)
  //3.마지막 요소 제거(next=null로 끊어내기)
  pop() {
    if (!this.head) return undefined; //비어있는 list라면

    //순회(두 변수 사용= current가 newTail을 이끄는형식으로 current가 맨끝에 도달할때까지 이동)
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current; //newTail은 current따라감
      current = current.next; //current는 한칸 더 이동
    }
    //while문을 마친후(순회마치면) newTail은 새로운 tail일것이다.
    this.tail = newTail; //tail 업데이트
    this.tail.next = null; //마지막요소 끊어내기 (이제 내가 tail이야!)
    this.length--;

    //이제 더 이상 pop할 요소가 없는 특이한 경우 = head,tail이 그대로 남아있는 문제가 발생
    if (this.length === 0) {
      this.head = null; //초기화 해줌
      this.tail = null;
    }
    return current; //기존의 맨 마지막요소 (pop한 요소) 리턴
  }

  shift() {
    //1.맨 앞 요소 변수에 저장
    //2.head 업데이트 (기존 head.next로)
    //3.길이-1

    if (!this.head) return undefined;

    let currentHead = this.head; //1
    this.head = currentHead.next; //2
    this.length--; //3

    if (this.length === 0) {
      this.tail = null; //head는 null로 업데이트가 잘된다
    }
    return currentHead;
  }

  //1.새로운 노드 뒤에 기존 노드 연결 (newNode.next=기존 헤드)
  //2.head 업데이트 (head=newNode)
  //3. 길이+1
  unshift(val) {
    const newNode = new Node(val); //새로운 노드 생성
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      //❗️else문으로 씌워줘야, head=tail=newNode인데 head의 next가 head, tail의 next가 newNode가 되는 문제를 막을수 있음
      newNode.next = this.head; //1
      this.head = newNode; //2
    }
    this.length++;
    return this;
  }
  get(index) {
    //index 체크
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      //counter < index
      current = current.next;
      counter++;
    }
    //counter==index가 되는순간 find!
    return current;
  }
  //기존에 존재하면, val만 바꾼다
  //존재하지 않으면, false
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    //index check
    if (index < 0 || index > this.length) return false;

    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(val);

    //1.기존자리 노드는 임시변수로 저장해두기
    //2.prev 찾아서 next로 새로운 노드 연결하기
    //3.새로운 노드 next를 기존노드 연결하기

    const prev = this.get(index - 1);
    const temp = prev.next; //1
    prev.next = newNode; //2
    newNode.next = temp; //3

    this.length++;
    return true;
  }
  remove(index) {
    //index 유효성
    if (index < 0 || index > this.length) return undefined;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prev = this.get(index - 1);
    const removed = prev.next;
    prev.next = removed.next;

    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    //head, tail swap
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    //순회
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev; //linking: 거꾸로
      //한칸씩 이동
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

const list = new SingleLinkedList();

console.log(list.push("HI"));
console.log(list.push("How"));
console.log(list.push("you"));
