class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(el) {
    this.items.push(el);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    if (this.items.length !== 0) {
      return this.items[0];
    }
    return null;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    return this.items;
  }
}
