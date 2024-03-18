class Product11c {
  productId: number;
  productName: string;
  price: number
  constructor(productId: number, productName: string, price: number) {
    this.productId = productId
    this.productName = productName
    this.price = price
  }
}
const p1 = new Product11c(1, "Smartphone", 599.99);
const p2 = new Product11c(2, "Tablet", 399.99);
const p3 = new Product11c(3, "Smartwatch", 199.99);
const productList: Product11c[] = [p1, p2, p3];
console.log(productList);
