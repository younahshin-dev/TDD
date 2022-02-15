class Stack {
  
  constructor() {
    this.storeList = [];
  }

  reset() {
    this.storeList = [];
  }
  push(param) {
    this.storeList.push(param);
    this.storeList.map( content => console.log(content))

    return true;
  }

  pop() {
    const popValue = this.storeList.pop();

    if(!popValue) {
      return 'noData';
    }

    console.log(`---------pop--------`);
    
    this.storeList.map( content => console.log(content))

    return popValue;
  }  
}
  
module.exports = Stack;