//問題：引数に文字列の配列を受け取り、その中身の順番を逆にして返す関数を作成する
//例：reverseArray(["a", "b", "c"]) => ["c", "b", "a"]
//実際にデータ型を定義してみよう：変数、引数、戻り値
var reverseArray = function (arr) {
    var reverseArray = [];
    var index = arr.length - 1;
    while (index >= 0) {
        reverseArray.push(arr[index]);
        index--;
    }
    return reverseArray;
};
console.log(reverseArray(["a", "b", "c"]));
