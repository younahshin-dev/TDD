const check = require('../check.js');

describe('mock test', () => {
  let onSuccess;
  let onFail;
  beforeEach(() => {
    const predicate = jest.fn(x => x|0 );
    onSuccess = jest.fn(x => console.log(x));
    onFail = jest.fn(x => console.log(x));
  });
  
  it('should call onSuccess when predicate is true', () => {

   check(() => true, onSuccess, onFail);
  //  expect(onSuccess.mock.calls.length).toBe(1);
  expect(onSuccess).toHaveBeenCalledTimes(1);

  //  expect(onFail.mock.calls.length).toBe(0);
   expect(onFail).toHaveBeenCalledTimes(0);

  //  expect(onSuccess.mock.calls[0][0]).toBe('yes'); //onSuccess가 첫번째로 호출되었을 때의 첫번째 인자는 yes
   expect(onSuccess).toHaveBeenCalledWith('yes');
  });

  it('should call onFail when predicate is false', () => {

   check(() => false, onSuccess, onFail);
   expect(onFail).toHaveBeenCalledTimes(1);
 
   expect(onSuccess).toHaveBeenCalledTimes(0);
   expect(onFail).toHaveBeenCalledWith('no');
  });
});