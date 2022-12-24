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

const queue = new Queue();

///////////////////////////////
//////// IsEmpty Queue ////////
///////////////////////////////

console.log('------------------------------');
console.log('IsEmpty Queue');
console.log('------------------------------');
console.log(queue.isEmpty());

///////////////////////////////
///////// Size Queue //////////
///////////////////////////////

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

console.log('------------------------------');
console.log('Size Queue');
console.log('------------------------------');
console.log(queue.size());
