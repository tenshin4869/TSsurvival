"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function objectSample() {
    var a = {
        name: "Tenshin",
        age: 20,
    };
    //a.name
    //オブジェクトリテラル記法で型定義
    var country = {
        language: "Japanese",
        name: "Japan",
    };
    console.log("Object object sample 1: ", country);
    country = {
        language: "English",
        name: "America",
    };
    console.log("Object object sample 2: ", country);
    //オプショナルとreadonly
    var human = {
        age: 20,
        lastName: "Yamada",
        firstName: "Taro",
    };
    human.gender = "male";
    console.log("Object object sample 3: ", human);
}
exports.default = objectSample;
