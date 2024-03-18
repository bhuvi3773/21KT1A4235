var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.construct = function (productId) {
        this.productId = productId;
    };
    Product.prototype.getProductId = function () {
        console.log("product id is: " + this.productId);
    };
    return Product;
}());
var obj = new Product();
obj.productId = 1221;
obj.getProductId();
