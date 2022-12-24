class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(el) {
    this.items[this.rear] = el;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.items[this.front] - this.items[this.rear] === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.items[this.rear] - this.items[this.front];
  }

  print() {
    console.log(this.items);
  }
}

const queue = new Queue();

///////////////////////////////
//////// IsEmpty Queue ////////
///////////////////////////////

console.log('------------------------------');
console.log('Optimised IsEmpty Queue');
console.log('------------------------------');
console.log(queue.isEmpty());
