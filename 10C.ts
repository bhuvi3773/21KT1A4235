interface Product {
    productId: number;
    productName: string;
}
function populateProductDetails(id: number, name: string): Product {
    const product: Product = {
        productId: id,
        productName: name,
    };
    return product;
}
const sampleProduct: Product = populateProductDetails(1, 'Sample Product');
console.log('Product Details:', sampleProduct);
