function getMobileByManufacturer(manufacturer, id) {
    if (id === 101) {
        console.log("Manufacturer: ".concat(manufacturer, ", ID: ").concat(id));
    }
    else {
        console.log("Manufacturer: ".concat(manufacturer));
    }
}
getMobileByManufacturer("Samsung", 101);
getMobileByManufacturer("Samsung");
getMobileByManufacturer("Samsung", 102);
