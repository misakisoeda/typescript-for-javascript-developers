export {};

// 静的メンバとは
// 変化しないもの
// newによってインスタンスを作成したくない

class Me {
    static isProgrammer: boolean = true;
    static firstName: string = 'Misaki';
    static lastName: string = 'Soeda';

    static work() {    //メソッドもできる
        return `Hey, guys! This is ${this.firstName}! Are you insterested in TypeScript? Let's dive into TypeScript!`
    }
}

// let me = new Me();   //インスタンス生成
// console.log(me.isProgrammer);

console.log(Me.isProgrammer);
console.log(Me.work());