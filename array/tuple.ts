export default function tupleSample() {
  let response: [number, string] = [200, "OK"];
  // response = [400, "BadResponse", "OK"]
  console.log("Array tuple sample 1:", response);

  //可変長引数を使ったタプル
  const girlfriends: [string, ...string[]] = ["Kana", "Miku", "Keiko"];
  girlfriends.push("Misa");
  console.log("Array tuple sample 2:", girlfriends);
}
