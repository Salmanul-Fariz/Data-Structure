class Stack {
  constructor() {
    this.items = [];
  }

  push(el) {
    this.items.push(el);
  }

  pop() {
    return this.items.pop();
  }

  peak() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items);
  }
}

const stack = new Stack();

///////////////////////////////
//////// IsEmpty Stack ////////
///////////////////////////////

console.log('------------------------------');
console.log('IsEmpty Stack');
console.log('------------------------------');
console.log(stack.isEmpty());

///////////////////////////////
///////// Size Stack //////////
///////////////////////////////

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log('------------------------------');
console.log('Size Stack');
console.log('------------------------------');
console.log(stack.size());
