class Product {
    private productId: number;

    constructor(productId: number) {
        this.productId = productId;
    }

    // Method to set productId
    setProductId(productId: number): void {
        this.productId = productId;
    }

    // Method to get productId
    getProductId(): number {
        return this.productId;
    }
}

// Example usage:
const product = new Product(12345);
console.log(product.getProductId()); // Output: 12345

product.setProductId(54321);
console.log(product.getProductId()); // Output: 54321