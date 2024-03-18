var productArray = [
    { productId: 1, productName: "Product 1" },
    { productId: 2, productName: "Product 2" },
    { productId: 3, productName: "Product 3" }
];
var eventHandler = function (productId) {
    var selectedProduct = productArray.filter(function (product) { return product.productId === productId; })[0];
    nextScreen(selectedProduct);
};
var nextScreen = function (product) {
    console.log(product);
};
eventHandler(2);
