type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Dan = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type Player = "first" | "second";

//コマの位置を表すクラス
class Position {
  constructor(private suji: Suji, private dan: Dan) {}
}

//インスタンスを生成
// new Position(1, "2");

//コマを表すクラス
class Piece {
  position: Position;

  constructor(private readonly player: Player, suji: Suji, dan: Dan) {
    this.position = new Position(suji, dan);
  }
}
