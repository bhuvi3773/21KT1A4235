function getMobileByManufacturer(manufacturer: string, id?: number) {
    if (id === 101) {
        console.log(`Manufacturer: ${manufacturer}, ID: ${id}`);
    } else {
        console.log(`Manufacturer: ${manufacturer}`);
    }
}
getMobileByManufacturer("Samsung", 101);
getMobileByManufacturer("Samsung");
getMobileByManufacturer("Samsung", 102);
