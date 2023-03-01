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

  append(val) {
    const node = new Node(val);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }

      prev.next = node;
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

list.append(1);
list.append(2);
list.append(3);
list.append(4);

list.print();
