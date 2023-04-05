export {};

// アクセスを制御するメソッド　ゲッター、セッター

// * owner
//      * 所有者
//      * 初期化時に設定できる。
//      * 途中で変更できない。
//      * 参照できる。
// * secretNumber
//      * 個人番号
//      * 初期化時に設定できる。
//      * 途中で変更できる。
//      * 参照できない。

class MyNumberCard {
    private _owner: string;  //private アクセス修飾子 classの中だけでアクセスができる
    private _secretNumber: number;

    constructor(owner: string, secretNumber: number) {
        this._owner = owner;
        this._secretNumber = secretNumber;
    }

    get owner() {   //get 参照するメソッド
        return this._owner;
    }

    set secretNumber(secretNumber: number) {    //set セッター　値を設定するメソッド
        this._secretNumber = secretNumber;
    }

    debugPring() {
        return `secretNumber: ${this._secretNumber}`;
    }
}

let card = new MyNumberCard('添田さん', 1234567890);
// card.owner = 'Soeda';    検証
console.log(card.owner);

// card._secretNumber;
console.log(card.debugPring());
card.secretNumber = 1111111111;
console.log(card.debugPring());

console.log(card.secretNumber);