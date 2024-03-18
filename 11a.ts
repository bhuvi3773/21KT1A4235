interface Category {
  categoryId: number;
  categoryName: string;
}

interface Product {
  productId: number;
  productName: string;
  price: number;
}

interface productList extends Category, Product {
  quantityAvailable: number;
}

const myProduct: productList = {
  categoryId: 1,
  categoryName: "Electronics",
  productId: 101,
  productName: "Smartphone",
  price: 599.99,
  quantityAvailable: 100
};

console.log(myProduct);
