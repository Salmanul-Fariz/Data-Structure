class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(val) {
    const node = new Node(val);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log('Empty');
    } else {
      let curr = this.head;
      let values = '';
      while (curr) {
        values += `${curr.value}  `;

        curr = curr.next;
      }

      console.log(values);
    }
  }
}

const list = new LinkedList();

list.prepend(4);
list.prepend(3);

list.print();
