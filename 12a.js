var Product = /** @class */ (function () {
    function Product(productId) {
        this.productId = productId;
    }
    // Method to set productId
    Product.prototype.setProductId = function (productId) {
        this.productId = productId;
    };
    // Method to get productId
    Product.prototype.getProductId = function () {
        return this.productId;
    };
    return Product;
}());
// Example usage:
var product = new Product(12345);
console.log(product.getProductId()); // Output: 12345
product.setProductId(54321);
console.log(product.getProductId()); // Output: 54321
