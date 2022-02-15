//const Stack = require('../stack.js');
const Stack = require('../stack_object.js');

describe('stack test', () => {
  
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.size()).toBe(0);
  });

  describe('push test', () => {
    it('allow push item', () => {
      stack.push(':banana:');
      expect(stack.size()).toBe(1);
    });

    it('push 1 pop 1', () => {
      stack.push('test1');
      expect(stack.pop()).toBe('test1');
    });

    
  });

  describe('pop test', () => {
    it('poping when stack has nothing throws error', () => {
      expect(()=> {stack.pop()}).toThrow('Stack is empty');
    });

    it('returns the last pushed item and remove item', () => {
      stack.push('test1');
      stack.push('test2');
      expect(stack.size()).toBe(2);
      expect(stack.pop()).toBe('test2');
      expect(stack.size()).toBe(1);
    });
  });

  describe('peek test', () => {
    
    it('throws an error if stack is empty', () => {
      expect(()=> {stack.peek()}).toThrow('Stack is empty');
    });

    it('return the last pushed item but keep item', () => {
      
      stack.push('data')
      expect(stack.peek()).toBe('data');
      expect(stack.size()).toBe(1);
    });
  });

})