const ProductClient = require('./product_client');
class ProductService {
  constructor() {
    this.productClient = new ProductClient();
  };

  fetchAvailableItems() {
    return this.productClient
            .fetchItems()
            .then((items) => { return items.filter((item) =>  { return item.available } ) });
  }
}

module.exports = ProductService;
//no-di version = no dependency injection -> bad example