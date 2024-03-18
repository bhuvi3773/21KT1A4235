function populateProductDetails(id, name) {
    var product = {
        productId: id,
        productName: name,
    };
    return product;
}
var sampleProduct = populateProductDetails(1, 'Sample Product');
console.log('Product Details:', sampleProduct);
