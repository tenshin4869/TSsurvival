"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMessage4 = exports.logMessage3 = exports.logMessage2 = exports.logMessage = void 0;
//アロー関数
var logMessage = function (message) {
    console.log("function sample 1", message);
};
exports.logMessage = logMessage;
//名前付き関数
function logMessage2(message) {
    console.log("function sample 2", message);
}
exports.logMessage2 = logMessage2;
//関数式
var logMessage3 = function (message) {
    console.log("function sample 3", message);
};
exports.logMessage3 = logMessage3;
//アロー関数の省略記法
var logMessage4 = function (message) {
    return console.log("function sample 4", message);
};
exports.logMessage4 = logMessage4;
