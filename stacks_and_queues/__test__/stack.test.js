// What things should a Stack be able to do?
// peek(), push(), pop()

const {Stack, Queue} = require('../stacks_and_queues.js');

describe ('Stack', () => {
  describe ('peek()', () => {
      it ('returns null When the stack is empty', () => {
        let testStack = new Stack();
        expect(testStack.peek()).toEqual(null);
      });
      it ('returns top element when the stack is populated', () => {
        let testStack = new Stack();
        testStack.push('1');
        testStack.push('2');
        testStack.push('3');
        let copyStack = testStack;
        expect(testStack.peek()).toEqual('3');
        expect(testStack).toEqual(copyStack);
      });
  });
});
//   describe ('push()', () => {
//     it ('returns null When the stack is empty', () => {
//       let testStack = new Stack();
//       expect(testStack.peek()).toEqual(null);
//     });
//     it ('returns top element when the stack is populated', () => {
//       let testStack = new Stack();
//       testStack.push('1');
//       expect(testStack.peek()).toEqual('1');
//     });
// })
