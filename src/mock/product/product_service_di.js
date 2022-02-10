
class ProductService {
  constructor(productClient) {
    this.productClient = productClient;
  };

  fetchAvailableItems() {
    return this.productClient
            .fetchItems()
            .then((items) => { return items.filter((item) =>  { return item.available } ) });
  }
}

module.exports = ProductService;
//no-di version = no dependency injection -> bad example


// 코드에서 나는 나쁜냄새를 좋은 테스트 프레임웍으로 카바한 느낌  -> stub을 사용해보자
//mock, stub :  둘다 진짜가 아니라 그럴싸한 가짜로 흉내내는것은동일하지만
//mock 은 구현사항이 없고 내가 원하는 것만 부분적으로 흉내를냄
//stub은 기존의 쓰이는 진짜의 인터페이스를 충족하는 실제로 구현된 코드인데 진짜랑 대체가능한 코드