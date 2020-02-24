'use strict';

class Stack {
  constructor (){
    this.data = [];
  }

  push (item) {
    this.data.push(item);
  }

  pop () {
    return this.data.pop();
  }

  peek () {
    return this.data[this.data.length - 1];
  }

  isEmpty (){
    return this.data.length === 0;
  }

  toStringBottomFirst () {
    const strArr = this.data.map(item => '[' + item + ']');
    return strArr.join('->');
  }
  toStringTopFirst () {
    const strArr = this.data.map(item => '[' + item + ']');
    return strArr.reverse().join('->');
  }
};

module.exports = Stack;

// const s1 = new Stack();
// s1.push('1');
// s1.push('2');
// s1.push(3);
// console.log(s1.toStringBottomFirst());
// console.log(s1.toStringTopFirst());

// console.log(s1.peek());
// s1.pop();
// console.log(s1.peek());
// s1.pop();
// console.log(s1.peek());
// s1.pop();
// console.log(s1.peek());
