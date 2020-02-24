'use strict';

const Stack = require('./stack');

class Queue {
  constructor () {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

  enqueue (item) {
    this.inStack.push(item);
  }

  dequeue () {
    if (this.outStack.isEmpty())
      this.pourData();
    
    return this.outStack.pop();
  }

  pourData () {
    while (!this.inStack.isEmpty()){
      this.outStack.push(this.inStack.pop());
    }
  }

  toString () {
    let str = "";
    if (!this.outStack.isEmpty()){
      str += this.outStack.toStringTopFirst();
      if (!this.inStack.isEmpty())
        str += '->';
    }
    if (!this.inStack.isEmpty())
      str += this.inStack.toStringBottomFirst();
    return str;
  }
};

const q = new Queue ();
q.enqueue(1);
console.log(q.toString());

q.enqueue(2);
console.log(q.toString());


console.log (q.dequeue());
q.enqueue(3);
console.log(q.toString());