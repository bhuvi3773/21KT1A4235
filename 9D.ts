interface Manufacturer {
    id: number;
    price: number;
}
let manufacturers: Manufacturer[] = [
    { id: 1, price: 100 },
    { id: 2, price: 200 },
    { id: 3, price: 300 },
    { id: 4, price: 400 }
];
let myfunction = (manufacturer: Manufacturer) => {
    if (manufacturer.price >= 200) {
        manufacturer.id = 200 + manufacturer.id;
    }
};
manufacturers.forEach(myfunction);
console.log(manufacturers);
