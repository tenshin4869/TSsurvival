"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function typeAliasSample() {
    var japan = {
        capital: "Tokyo",
        language: "Japanese",
        name: "Japan",
    };
    console.log("Object alias sample 1: ", japan);
    var America = {
        capital: "Washington D.C.",
        language: "English",
        name: "America",
    };
    console.log("Object alias sample 2: ", America);
    //Knightに成長したい冒険者
    var adventurer1 = {
        hp: 100,
        sp: 30,
        weapon: "木の剣",
        swordSkill: "三連切り",
    };
    //Wizardに成長したい冒険者
    var adventurer2 = {
        hp: 80,
        mp: 50,
        weapon: "木の杖",
        magicSkill: "ファイヤボール",
    };
    console.log("Object alias sample 3: ", adventurer1);
    console.log("Object alias sample 4: ", adventurer2);
    var paladin = {
        hp: 300,
        sp: 100,
        mp: 100,
        weapon: "銀の剣",
        swordSkill: "三連切り",
        magicSkill: "ファイヤボール",
    };
    console.log("Object alias sample 5: ", paladin);
}
exports.default = typeAliasSample;
