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
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
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

///////////////////////////////
///////// Size Queue //////////
///////////////////////////////

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

console.log('------------------------------');
console.log('Optimised Size Queue');
console.log('------------------------------');
console.log(queue.size());

///////////////////////////////
///////// Print Queue /////////
///////////////////////////////

console.log('------------------------------');
console.log('Optimised Print Queue');
console.log('------------------------------');

queue.print();

///////////////////////////////
///////// Dequeue Queue ///////
///////////////////////////////

console.log('------------------------------');
console.log('Optimised Dequeue Queue');
console.log('------------------------------');
console.log(queue.dequeue());

///////////////////////////////
///////// Peek Queue //////////
///////////////////////////////

console.log('------------------------------');
console.log('Optimised Peek Queue');
console.log('------------------------------');
console.log(queue.peek());
