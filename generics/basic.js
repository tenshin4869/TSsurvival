"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function genericsBasicSample() {
    //ジェネリック型を使わない場合
    var stringReduce = function (array, initialValue) {
        var result = initialValue;
        for (var i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    };
    console.log("Generics basic sample 1:", stringReduce(["May", "the", "force", "be", "with", "you"], ""));
    var numberReduce = function (array, initialValue) {
        var result = initialValue;
        for (var i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    };
    console.log("Generics basic sample 2:", numberReduce([100, 200, 300], 1000));
    var genericStringReduce = function (array, initialValue) {
        var result = initialValue;
        for (var i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    };
    console.log("Generics basic sample 3:", genericStringReduce(["MAKE", "TYPE", "Script"], "AGAIN"));
}
exports.default = genericsBasicSample;
