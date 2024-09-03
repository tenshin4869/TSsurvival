"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumPrice = exports.isUserSignedIn2 = exports.isUserSignedIn = void 0;
//オプションパラメーターを持つ関数
var isUserSignedIn = function (userId, username) {
    if (userId === "ABC") {
        console.log("function parameters sample 1, username is ", username);
        return true;
    }
    else {
        console.log("function parameters sample 2, username is not ");
        return false;
    }
};
exports.isUserSignedIn = isUserSignedIn;
//デフォルトパラメーターを持つ関数
var isUserSignedIn2 = function (userId, username) {
    if (username === void 0) { username = "NO NAME"; }
    if (userId === "ABC") {
        console.log("function parameters sample 1, username is ", username);
        return true;
    }
    else {
        console.log("function parameters sample 2, username is not ");
        return false;
    }
};
exports.isUserSignedIn2 = isUserSignedIn2;
//レストパラメーターを使った関数
var sumPrice = function () {
    var price = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        price[_i] = arguments[_i];
    }
    return price.reduce(function (prevTotal, productPrice) {
        return prevTotal + productPrice;
    }, 0);
};
exports.sumPrice = sumPrice;
