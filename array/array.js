"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arraySample() {
    //シンプルな配列の型定義
    var colors = ["red", "blue"];
    colors.push("yellow");
    //colors.push(123);
    console.log("Array array sample 1: ", colors);
    var even = [2, 4, 6];
    even.push(8);
    //even.push("10")
    console.log("Array array sample 2:", even);
    var ids = ["ABC", 123];
    ids.push("DEF");
    ids.push(456);
    //ids.push(true)
    console.log("Array array sample 3:", ids);
    //配列の型推論
    var generateSomeArray = function () {
        var _someArray = []; //any
        _someArray.push(123); //number[]
        _someArray.push("ABC"); //(string | number)[]
        return _someArray;
    };
    var someArray = generateSomeArray();
    someArray.push(456);
    console.log("Array array sample 4:", someArray);
}
exports.default = arraySample;
