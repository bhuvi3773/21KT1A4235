class Product {
    productId: number;

    construct(productId: number) {
        this.productId = productId
    }

    getProductId(): void {
        console.log("product id is: " + this.productId);
    }
}
var obj = new Product();
obj.productId = 1221;
obj.getProductId();