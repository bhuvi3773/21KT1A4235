class Product {
    private productId: number;
    public productName: string;
    static productPrice: number;
    protected productCategory: string;

    constructor(productId: number, productName: string, productPrice: number, productCategory: string) {
        this.productId = productId;
        this.productName = productName;
        Product.productPrice = productPrice;
        this.productCategory = productCategory;
    }

    getProductInfo(): string {
        return `Product ID: ${this.productId}, Product Name: ${this.productName}, Product Price: ${Product.productPrice}, Product Category: ${this.productCategory}`;
    }
}

class Gadget {
    constructor(private product: Product) { }

    displayProductInfo(): void {
        console.log(this.product.getProductInfo());
    }

    static displayProductPrice(): void {
        console.log(`Product Price: ${Product.productPrice}`);
    }
}

// Creating an instance of Product
const smartphone = new Product(1, "Smartphone", 599.99, "Electronics");

// Accessing properties through Gadget class and its methods
const gadget = new Gadget(smartphone);
gadget.displayProductInfo();
Gadget.displayProductPrice();
