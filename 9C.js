function getMobileByVendor(vendor) {
    var mobiles = [
        { id: 1, name: 'iPhone', vendor: 'Apple' },
        { id: 2, name: 'Galaxy S21', vendor: 'Samsung' },
        { id: 3, name: 'Pixel 6', vendor: 'Google' },
        { id: 4, name: 'Mate 40', vendor: 'Huawei' },
    ];
    return mobiles.filter(function (mobile) { return mobile.vendor === vendor; });
}
var appleMobiles = getMobileByVendor('Google');
console.log(appleMobiles);
