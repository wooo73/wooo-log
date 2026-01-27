export class Node {
  data: number;
  next: Node | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  head: Node;

  constructor(data: number) {
    this.head = new Node(data);
  }

  append(data: number) {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new Node(data);
  }

  printAll() {
    let current: Node | null = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

  /** 원소 찾기 */
  getNode(index: number) {
    let currentIndex = 0;
    let current: Node | null = this.head;

    while (currentIndex < index) {
      currentIndex += 1;
      current = current?.next || null;
    }

    return current || null;
  }

  /** 원소 추가 */
  addNode(index: number, data: number) {
    if (index === 0) {
      const currHead = this.head;
      this.head = new Node(data);
      this.head.next = currHead;
      return this.head;
    }

    let prevNode = this.getNode(index - 1);
    let nextNode = prevNode!.next;

    const newNode = new Node(data);

    prevNode!.next = newNode;
    newNode!.next = nextNode;
  }

  /** 원소 삭제 */
  deleteNode(index: number) {
    // [1]  [2]  [3]  [4]  [5]

    if (index === 0) {
      let currHead = this.head;
      this.head = currHead!.next!;
      return this.head;
    }

    let prevNode = this.getNode(index - 1);
    let targetNode = prevNode!.next;
    let nextNode = targetNode!.next;

    prevNode!.next = nextNode;
    targetNode!.next = null;
  }
}

const linkedList = new LinkedList(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

console.log("---------------append----------------");
linkedList.printAll();

console.log("---------------getNode index 4 찾기----------------");
console.log(linkedList.getNode(4)?.data);

console.log("---------------addNode index 2 이후 10 추가----------------");
linkedList.addNode(2, 10);
linkedList.printAll();
console.log("---------------addNode index 0 이후 98 추가----------------");
linkedList.addNode(0, 98);
linkedList.printAll();
console.log("--------------------------------\n\n");
console.log("---------------deleteNode index 2 삭제----------------");
linkedList.deleteNode(2);
linkedList.printAll();
console.log("---------------deleteNode index 0 삭제----------------");
linkedList.deleteNode(0);
linkedList.printAll();
console.log("--------------------------------\n\n");
