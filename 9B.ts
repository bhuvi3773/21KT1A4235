let productArray = [
    { productId: 1, productName: "Product 1" },
    { productId: 2, productName: "Product 2" },
    { productId: 3, productName: "Product 3" }
];
let eventHandler = (productId) => {
    let selectedProduct = productArray.filter((product) => product.productId === productId)[0];
    nextScreen(selectedProduct);
}
let nextScreen = (product) => {
    console.log(product);
}
eventHandler(2);
