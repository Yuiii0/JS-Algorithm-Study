class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (value === current.value) return undefined;

        if (value < current.value) {
          //왼쪽으로 분기
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left; //depth 내려가기
        } else {
          //오른쪽으로 분기
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right; //depth 내려가기
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false; //비어있는 트리일때

    let current = this.root;

    while (current !== null) {
      // if (current.value === null) { while문 조건에 포함시켰다.
      //   //더이상 내려갈 depth가 없다
      //   return false;
      // }

      if (current.value === value) {
        //find!!햣
        return true;
      }

      if (current.value > value) {
        //left 분기
        current = current.left;
      } else {
        //right 분기
        current = current.right;
      }
    }
    return false; //while문을 탈출하고 못찾았다면
  }
}

const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
