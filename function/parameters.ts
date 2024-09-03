//オプションパラメーターを持つ関数
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === "ABC") {
    console.log("function parameters sample 1, username is ", username);
    return true;
  } else {
    console.log("function parameters sample 2, username is not ");
    return false;
  }
};

//デフォルトパラメーターを持つ関数
export const isUserSignedIn2 = (
  userId: string,
  username = "NO NAME"
): boolean => {
  if (userId === "ABC") {
    console.log("function parameters sample 1, username is ", username);
    return true;
  } else {
    console.log("function parameters sample 2, username is not ");
    return false;
  }
};

//レストパラメーターを使った関数
//reduceメソッドは配列に使うことができる
//配列内の要素をバラバラにできる
export const sumPrice = (...price: number[]): number => {
  return price.reduce((prevTotal, productPrice) => {
    return prevTotal + productPrice;
  }, 0);
};
