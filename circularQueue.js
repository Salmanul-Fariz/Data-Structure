class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(el) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = el;
      this.currentLength++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;

    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      return null;
    } else {
      let i,
        str = '';
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + ' ';
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const circularQueue = new CircularQueue(5);

///////////////////////////////
/// IsEmpty Circular Queue ////
///////////////////////////////

console.log('------------------------------');
console.log('IsEmpty Circular Queue');
console.log('------------------------------');
console.log(circularQueue.isEmpty());

///////////////////////////////
//// isFull Circular Queue ////
///////////////////////////////

circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);

console.log('------------------------------');
console.log('isFull Circular Queue');
console.log('------------------------------');
console.log(circularQueue.isFull());

///////////////////////////////
///// Print Circular Queue ////
///////////////////////////////

console.log('------------------------------');
console.log('Print Circular Queue');
console.log('------------------------------');

circularQueue.print();

///////////////////////////////
/// Dequeue Circular Queue ////
///////////////////////////////

console.log('------------------------------');
console.log('Dequeue Circular Queue');
console.log('------------------------------');
console.log(circularQueue.dequeue());

///////////////////////////////
///// Peek Circular Queue /////
///////////////////////////////

console.log('------------------------------');
console.log('Peek Circular Queue');
console.log('------------------------------');
console.log(circularQueue.peek());
