class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
      this.tail = node;
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
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      node.next = prev.next;
      prev.next = node;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      removeNode = prev.next;
      prev.next = removeNode.next;
    }

    this.size--;
    return removeNode;
  }

  removeValue(val) {
    if (this.isEmpty()) {
      return null;
    }

    if (this.head.value === val) {
      this.head = this.head.next;
      this.size--;
      return val;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== val) {
        prev = prev.next;
      }

      if (prev.next) {
        const removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return val;
      }

      return null;
    }
  }

  search(val) {
    if (this.isEmpty()) {
      return -1;
    }

    let index = 0;
    let curr = this.head;

    while (curr) {
      if (curr.value === val) {
        return index;
      }
      curr = curr.next;
      index++;
    }
    return -1;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
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
// console.log(list.size);
list.insert(5, 4);
// list.removeFrom(3);
// list.removeValue(5);

list.print();
list.reverse();
list.print();
