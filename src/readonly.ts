export {};

// readonly 修飾子

class VisaCard {
    // readonly owner: string;   //初期化処理の簡略化のためコメントアウト
    // constructor(owner: string) {    //初期化
    //     this.owner = owner;
    // }

    constructor(public readonly owner: string) {}   //初期化処理の簡略化 publicは省略可能だが書かれていた方が優しい。更にreadonlyの時だけのルールなので書く癖をつける。
}

let myVisaCard = new VisaCard('そえ');
console.log(myVisaCard.owner);

// myVisaCard.owner = '知らない人'; //検証