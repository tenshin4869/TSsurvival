const calculator = {
  sum(a: number, b: number) {
    return a + b;
  },
};

console.log(calculator.sum(1, 1));

//オブジェクトの型解釈
let box: { width: number; height: number };
box = { width: 120, height: 720 };

//型エイリアス
type Box = { width: number; height: number };
let box2: Box = { width: 1080, height: 720 };
