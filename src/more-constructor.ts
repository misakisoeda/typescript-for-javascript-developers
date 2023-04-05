export {};

class Person {

    //constructorの引数はpublicも省略しない、TSは自動で初期化処理までやってくれる！
    constructor(public name: string, protected age:number) {}
}

const me = new Person('添田', 34);
console.log(me);