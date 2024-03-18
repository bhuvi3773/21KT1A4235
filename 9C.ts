type Mobile = {
    id: number;
    name: string;
    vendor: string;
};
function getMobileByVendor(vendor: string): Mobile[] {
    const mobiles: Mobile[] = [
        { id: 1, name: 'iPhone', vendor: 'Apple' },
        { id: 2, name: 'Galaxy S21', vendor: 'Samsung' },
        { id: 3, name: 'Pixel 6', vendor: 'Google' },
        { id: 4, name: 'Mate 40', vendor: 'Huawei' },
    ];
    return mobiles.filter(mobile => mobile.vendor === vendor);
}
const appleMobiles = getMobileByVendor('Google');
console.log(appleMobiles);