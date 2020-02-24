'use strict';

class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor () {
    this.top = null;
  }

  push (data) {
    let newNode = new Node (data);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop () {
    if (this.isEmpty())
      throw new Error ('Try to pop an empty stack.');
    const data = this.top.data;
    this.top = this.top.next;
    return data;
  }

  peek () {
    if (this.isEmpty())
      return undefined;
    return this.top.data;
  }

  isEmpty () {
    return this.top === null;
  }

  toString () {
    let str = '';
    let ptr = this.top
    while (ptr !== null){
      str += '[' + ptr.data + ']';
      ptr = ptr.next;
      str += ptr === null? '':'->';
    }
    return str;
  }
}

class Queue {
  constructor () {
    this.front = null;
    this.back= null;
  }

  enqueue (data) {
    const newNode = new Node(data);
    if (this.isEmpty()){// an empty queue
      this.back = newNode;
      this.front = newNode;
    }
    else { //a non-empty queue
      this.back.next = newNode;
      this.back = newNode;
    }
  }

  dequeue () {
    if (this.isEmpty()) // empty queue
      throw new Error ('Try to dequeue an empty queue.');
    const data = this.front.data;
    this.front = this.front.next;
    //if there is only one element in the queue, it becomes empty after dequeue
    if (this.front === null) this.back = null;
    return data;
  }

  peek () {
    if (this.isEmpty())
      return undefined;
    return this.front.data;
  }

  isEmpty () {
    return this.front === null;
  }

  toString () {
    let str = '';
    let ptr = this.front
    while (ptr !== null){
      str += '[' + ptr.data + ']';
      ptr = ptr.next;
      str += ptr=== null? '':'->';
    }
    return str;
  }
}

module.exports = {Stack, Queue}

// local tests
// const s = new Stack();
// console.log(s.toString());

// s.push('1');
// s.push('2');
// s.push('3');
// console.log(s.toString());

// s.pop();
// console.log(s.toString());

// const q = new Queue();
// console.log(q.toString());

// q.enqueue('1');
// q.enqueue('2');
// q.enqueue('3');
// console.log(q.toString());

// q.dequeue();
// console.log(q.toString());