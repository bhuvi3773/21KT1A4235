var Product11c = /** @class */ (function () {
    function Product11c(productId, productName, price) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
    }
    return Product11c;
}());
var p1 = new Product11c(1, "Smartphone", 599.99);
var p2 = new Product11c(2, "Tablet", 399.99);
var p3 = new Product11c(3, "Smartwatch", 199.99);
var productList = [p1, p2, p3];
console.log(productList);
