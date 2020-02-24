// What things should a queue be able to do?
// peek(), enqueue(), pop(), isEmpty()

const {Queue} = require('../stacks_and_queues.js');

describe ('Queue', () => {
  describe ('peek()', () => {
    describe ('When queue is empty', () => {
      it ('returns undefined', () => {
        let testQueue = new Queue();
        expect(testQueue.peek()).toBeUndefined();
      });
    });
    describe ('When queue is populated', () => {
      it ('returns the front element', () => {
        let testQueue = new Queue();
        testQueue.enqueue('1');
        testQueue.enqueue('2');
        expect(testQueue.peek()).toEqual('1');
        expect(testQueue.front.data).toEqual('1');
        expect(testQueue.back.data).toEqual('2');
      });
    });
  });

  describe ('enqueue()', () => {
    describe('When queue is empty', () => {
      it ('Push the element to the front', () => {
        let testQueue = new Queue();
        testQueue.enqueue('1');
        expect(testQueue.front.data).toEqual('1');
        expect(testQueue.back.data).toEqual('1');
      });
    });
    describe('When queue is populated', () => {
      it ('Push the element on top', () => {
        let testQueue = new Queue();
        testQueue.enqueue('1');
        testQueue.enqueue('2');
        testQueue.enqueue('3');
        expect(testQueue.front.data).toEqual('1');
        expect(testQueue.back.data).toEqual('3');
      });
    });
  });


  describe ('dequeue()', () => {
    describe('When queue is empty', () => {
      it ('throw an error with message "Try to dequeue an empty queue."', () => {
        let testQueue = new Queue();
        try {
          testQueue.dequeue();
        } catch (e) {
          expect(e.message).toEqual('Try to dequeue an empty queue.');
        }
        expect(testQueue.front).toEqual(null);
        expect(testQueue.back).toEqual(null);
      });
    });
    describe('When queue is populated with only 1 element', () => {
      it ('pops the front element and gets an empty queue', () => {
        let testQueue = new Queue();
        testQueue.enqueue('1');
        expect(testQueue.dequeue()).toEqual('1');
        expect(testQueue.front).toEqual(null);
        expect(testQueue.back).toEqual(null);

      });
    });
    describe('When queue is populated with more than 1 elment', () => {
      it ('pops the front element', () => {
        let testQueue = new Queue();
        testQueue.enqueue('1');
        testQueue.enqueue('2');
        expect(testQueue.dequeue()).toEqual('1');
        expect(testQueue.front.data).toEqual('2');
        expect(testQueue.back.data).toEqual('2');
      })
    })
  });

  describe ('isEmpty()', () => {
    describe ('When queue is empty', () => {
      it ('returns true', () => {
        let testQueue = new Queue();
        expect(testQueue.isEmpty()).toEqual(true);
      });
    });
    describe ('When queue is populated', () => {
      it ('returns true', () => {
        let testQueue = new Queue();
        testQueue.enqueue('1');
        testQueue.enqueue('2');
        expect(testQueue.isEmpty()).toEqual(false);
      });
    });
  });

  describe ('toString()', () => {
    describe ('When queue is empty', () => {
      it ('returns an empty string', () => {
        let testQueue = new Queue();
        expect(testQueue.toString()).toEqual('');
      });
    });
    describe ('When queue is populated', () => {
      it ('returns the string representation of the queue', () => {
        let testQueue = new Queue();
        testQueue.enqueue('1');
        testQueue.enqueue('2');
        expect(testQueue.toString()).toEqual('[1]->[2]');
      });
    });
  });
})
