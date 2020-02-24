// What things should a Stack be able to do?
// peek(), push(), pop(), isEmpty()

const {Stack} = require('../stacks_and_queues.js');

describe ('Stack', () => {
  describe ('peek()', () => {
    describe ('When stack is empty', () => {
      it ('returns undefined', () => {
        let testStack = new Stack();
        expect(testStack.peek()).toBeUndefined();
      });
    });
    describe ('When stack is populated', () => {
      it ('returns top element', () => {
        let testStack = new Stack();
        testStack.push('1');
        testStack.push('2');
        testStack.push('3');
        expect(testStack.peek()).toEqual('3');
        expect(testStack.top.data).toEqual('3');
        expect(testStack.top.next.data).toEqual('2');
        expect(testStack.top.next.next.data).toEqual('1');
      });
    });
  });

  describe ('push()', () => {
    describe('When stack is empty', () => {
      it ('Push the element on top', () => {
        let testStack = new Stack();
        testStack.push('1');
        expect(testStack.top.data).toEqual('1');
        expect(testStack.top.next).toEqual(null);
      });
    });
    describe('When stack is populated', () => {
      it ('Push the element on top', () => {
        let testStack = new Stack();
        testStack.push('1');
        testStack.push('2');
        expect(testStack.top.data).toEqual('2');
        expect(testStack.top.next.data).toEqual('1');
      });
    });
  });


  describe ('pop()', () => {
    describe('When stack is empty', () => {
      it ('throw an error with message "Try to pop an empty stack."', () => {
        let testStack = new Stack();
        try {
          testStack.pop();
        } catch (e) {
          expect(e.message).toEqual('Try to pop an empty stack.');
        }
        expect(testStack.top).toEqual(null);
      });
    });
    describe('When stack is populated', () => {
      it ('Pop the element on top', () => {
        let testStack = new Stack();
        testStack.push('1');
        testStack.push('2');
        expect(testStack.pop()).toEqual('2');
        expect(testStack.top.data).toEqual('1');
      });
    });
  });

  describe ('isEmpty()', () => {
    describe ('When stack is empty', () => {
      it ('returns true', () => {
        let testStack = new Stack();
        expect(testStack.isEmpty()).toEqual(true);
      });
    });
    describe ('When stack is populated', () => {
      it ('returns true', () => {
        let testStack = new Stack();
        testStack.push('1');
        testStack.push('2');
        testStack.push('3');
        expect(testStack.isEmpty()).toEqual(false);
      });
    });
  });

  describe ('toString()', () => {
    describe ('When stack is empty', () => {
      it ('returns an empty string', () => {
        let testStack = new Stack();
        expect(testStack.isEmpty()).toEqual(true);
      });
    });
    describe ('When stack is populated', () => {
      it ('returns the string representation of the stack', () => {
        let testStack = new Stack();
        testStack.push('1');
        testStack.push('2');
        testStack.push('3');
        expect(testStack.toString()).toEqual('[3]->[2]->[1]');
      });
    });
  });
})
