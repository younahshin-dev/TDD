class Stack {
  
  constructor() {
    this.storeList = [];
  }

  reset() {
    this.storeList = [];
  }

  size() {
    return this.storeList.length;
  }

  push(param) {
    this.storeList.push(param);
    this.storeList.map( content => console.log(content))

    return true;
  }

  pop() {

    if (this.storeList.length === 0) {
      throw new Error('Stack is empty');
    }

    const popValue = this.storeList.pop();

    // if(!popValue) {
    //   return 'noData';
    // }

    console.log(`---------pop--------`);
    
    this.storeList.map( content => console.log(content))

    return popValue;
  }  

  peek() {

    if (this.storeList.length === 0) {
      throw new Error('Stack is empty');
    }

    return this.storeList[this.storeList.length-1];
  }
}
  
module.exports = Stack;