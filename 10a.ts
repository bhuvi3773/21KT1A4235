type Product = string;
function addToCart(cart: Product[], ...products: Product[]): Product[] {
    return [...cart, ...products];
}
let cart: Product[] = ['Product1', 'Product2'];
cart = addToCart(cart, 'Product3', 'Product4', 'Product5');
console.log('Updated Cart:', cart);