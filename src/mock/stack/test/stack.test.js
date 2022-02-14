const Stack = require('../stack.js');

describe('stack test', () => {
  
  const stack = new Stack();

  it('push log', () => {
    const isSuccess = stack.push('test1');
    expect(isSuccess).toBe(true);
  });
})