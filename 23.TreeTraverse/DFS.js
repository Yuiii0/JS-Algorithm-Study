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
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;

    let current = this.root;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }

      if (current.value > value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  DFSPreOrder() {
    let data = [];

    function traverse(node) {
      data.push(node.value); //해당 값 data에 push
      if (node.left) {
        //left가 있다면, depth 증가
        traverse(node.left);
      }
      //left로 모든 depth를 거치고 return해서 돌아오면 바로 이 코드로 돌아올것이다. 이때 right가 있는지 확인
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node.value); //left가 없으면, push
    }
    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      data.push(node.value);

      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return data;
  }
}

const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
