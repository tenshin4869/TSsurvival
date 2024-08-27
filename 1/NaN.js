//NaNの処理結果
const price = parseInt("百円");
console.log(price);

//値がNaNであるかのチェック
if (Number.isNaN(price)) {
  console.log("数値化できません");
}
