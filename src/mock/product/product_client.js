class ProductClient {
  fetchItems() {
    return fetch('http://emaple.com/login/id+password').then((response) => {
      response.json()
    });
  }
}

module.exports = ProductClient;