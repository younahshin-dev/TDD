const add = require('../add.js');

//테스트 함수를 ''원하는 타이틀로 실행하고 콜백함수 안에서 테스트 진행
test('add 1 + 2 = 3', () => {
  //테스트 코드 작성
  expect(add(1, 2)).toBe(3);
})