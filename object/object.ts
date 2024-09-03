export default function objectSample() {
  const a: object = {
    name: "Tenshin",
    age: 20,
  };
  //a.name

  //オブジェクトリテラル記法で型定義
  let country: {
    language: string;
    name: string;
  } = {
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
  const human: {
    age: number;
    lastName: string;
    readonly firstName: string;
    gender?: string;
  } = {
    age: 20,
    lastName: "Yamada",
    firstName: "Taro",
  };

  human.gender = "male";
  console.log("Object object sample 3: ", human);
}
