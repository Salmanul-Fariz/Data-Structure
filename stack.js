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

///////////////////////////////
//////// IsEmpty Stack ////////
///////////////////////////////

const stack = new Stack();

console.log('------------------------------');
console.log('IsEmpty Stack');
console.log('------------------------------');
console.log(stack.isEmpty());
