class StackObj {
  
  constructor() {
    this.length = 0,
    this.header = null;
  }

  size() {
    return this.length;
  }

  push(item) {
    const node = {item, next: this.header};
    this.header = node;
    this.length += 1;
  }

  pop() {
    if (this.length === 0) {
      throw new Error('Stack is empty');
    }

    const popValue = this.header.item;
    this.header = this.header.next;
    
    this.length -= 1;
    return popValue;
  }  

  peek() {

    if (this.length === 0) {
      throw new Error('Stack is empty');
    }
    return this.header.item;
  }
}
  
module.exports = StackObj;