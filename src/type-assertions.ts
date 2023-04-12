export {};

let name: any = 'Soe';

// let length: number = name.length;
// let length = name.length as number;  //型アサーション
let length = (name as string).length;  //型アサーション
// let length = (<string>name).length;  //型アサーション

// asを使う方法 <=こちらを使うようにする
// <>を使う方法 <=推奨されてない

// length = 'foo';

console.log(length);