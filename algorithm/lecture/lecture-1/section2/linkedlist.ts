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
}

const linkedList = new LinkedList(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

linkedList.printAll();
