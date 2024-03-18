var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function addToCart(cart) {
    var products = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        products[_i - 1] = arguments[_i];
    }
    return __spreadArray(__spreadArray([], cart, true), products, true);
}
var cart = ['Product1', 'Product2'];
cart = addToCart(cart, 'Product3', 'Product4', 'Product5');
console.log('Updated Cart:', cart);
