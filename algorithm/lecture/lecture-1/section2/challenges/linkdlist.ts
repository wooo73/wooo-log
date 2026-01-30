/**
 * Q. 링크드 리스트의 끝에서 K번째 값을 반환하시오.
 * [6] -> [7] -> [8] # 이런 링크드 리스트가 입력되었을 때, 
                  # 끝에서 2번째 값은 7을 반환해야 합니다!
 */

class Node {
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
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = new Node(data);
  }

  getLength() {
    let curr: Node | null = this.head;
    let length = 0;

    while (curr !== null) {
      length += 1;
      curr = curr.next;
    }
    return length;
  }

  getKthNodeFromLast(k: number) {
    const targetIndex = this.getLength() - k;
    let curr: Node | null = this.head;
    let index = 0;

    while (index < targetIndex) {
      curr = curr?.next ?? null;
      index += 1;
    }
    return curr?.data ?? null;
  }
}

const linkedlist = new LinkedList(6);
linkedlist.append(7);
linkedlist.append(8);

console.log(linkedlist.getKthNodeFromLast(2)); //7이 나와야 합니다!
