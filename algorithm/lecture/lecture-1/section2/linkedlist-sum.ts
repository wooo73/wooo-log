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
    let result = [];

    while (current !== null) {
      result.push(current!.data);
      current = current!.next;
    }

    console.log(result);
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

  getSumNodes() {
    let sum = 0;

    let curr: Node | null = this.head;

    while (curr !== null) {
      sum = sum * 10 + curr!.data;
      curr = curr.next;
    }

    return sum;
  }
}

/**
 * 
Q.  다음과 같은 두 링크드 리스트를 입력받았을 때, 합산한 값을 반환하시오. 

예를 들어 아래와 같은 링크드 리스트를 입력받았다면,
각각 678, 354 이므로 두개의 총합
678 + 354 = 1032 를 반환해야 한다.

단, 각 노드의 데이터는 한자리 수 숫자만 들어갈 수 있다.
 */

function main() {
  const firstLList = createLinkedList([6, 7, 8]);
  const secondLList = createLinkedList([3, 5, 4]);

  return firstLList.getSumNodes() + secondLList.getSumNodes();
}

function createLinkedList(numbers: number[]) {
  const linkedList = new LinkedList(numbers[0]);

  for (let i = 1; i < numbers.length; i++) {
    linkedList.append(numbers[i]);
  }

  return linkedList;
}

console.log(main());

/** 풀이
 * 
 * 
class LinkedListSum {
    constructor(value) {
        this.head = new LinkedListSum.Node(value);
    }
    
    append(value) {
        let cur = this.head;
        while (cur.next !== null) {
            cur = cur.next;
        }
        cur.next = new LinkedListSum.Node(value);
    }
}

// Define Node as a static property of LinkedListSum
LinkedListSum.Node = class {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
};

function getSingleLinkedListSum(linkedList) {
    let sum = 0;
    let cur = linkedList.head;
    while (cur !== null) {
        sum = sum * 10 + cur.data;
        cur = cur.next;
    }
    
    return sum;
}

function getLinkedListSum(linkedList1, linkedList2) {
    const sum1 = getSingleLinkedListSum(linkedList1);
    const sum2 = getSingleLinkedListSum(linkedList2);
    
    return sum1 + sum2;
}

// Main execution
const linkedList1 = new LinkedListSum(6);
linkedList1.append(7);
linkedList1.append(8);

const linkedList2 = new LinkedListSum(3);
linkedList2.append(5);
linkedList2.append(4);

console.log(getLinkedListSum(linkedList1, linkedList2));
 */
