const Stack = require('../stack.js');

describe('stack test', () => {
  
  const stack = new Stack();

  beforeEach(() => {
    stack.reset();
  });

  describe('push test', () => {
    it('push 1 pop 1', () => {
      stack.push('test1');
      expect(stack.pop()).toBe('test1');
    });

    it('push 2 pop 1', () => {
      stack.push('test1');
      stack.push('test2');
      expect(stack.pop()).toBe('test2');
    });
  });

  it('pop when stack has nothing', () => {
    const value = stack.pop();
    expect(value).toBe('noData');
  });

})