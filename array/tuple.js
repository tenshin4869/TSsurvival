"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function tupleSample() {
    var response = [200, "OK"];
    // response = [400, "BadResponse", "OK"]
    console.log("Array tuple sample 1:", response);
    //可変長引数を使ったタプル
    var girlfriends = ["Kana", "Miku", "Keiko"];
    girlfriends.push("Misa");
    console.log("Array tuple sample 2:", girlfriends);
}
exports.default = tupleSample;
