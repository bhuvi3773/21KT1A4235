var Product = /** @class */ (function () {
    function Product(productId, productName, productPrice, productCategory) {
        this.productId = productId;
        this.productName = productName;
        Product.productPrice = productPrice;
        this.productCategory = productCategory;
    }
    Product.prototype.getProductInfo = function () {
        return "Product ID: ".concat(this.productId, ", Product Name: ").concat(this.productName, ", Product Price: ").concat(Product.productPrice, ", Product Category: ").concat(this.productCategory);
    };
    return Product;
}());
var Gadget = /** @class */ (function () {
    function Gadget(product) {
        this.product = product;
    }
    Gadget.prototype.displayProductInfo = function () {
        console.log(this.product.getProductInfo());
    };
    Gadget.displayProductPrice = function () {
        console.log("Product Price: ".concat(Product.productPrice));
    };
    return Gadget;
}());
// Creating an instance of Product
var smartphone = new Product(1, "Smartphone", 599.99, "Electronics");
// Accessing properties through Gadget class and its methods
var gadget = new Gadget(smartphone);
gadget.displayProductInfo();
Gadget.displayProductPrice();
