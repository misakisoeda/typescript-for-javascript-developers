export {};

class Person {
    name: string;
    age: number;

    constructor (name: string, age: number) { //メソッド　戻り値に対応する型は設定しないルール　リターンしない
        this.name = name;
        this.age = age;
    }

    profile(): string { //メソッド&関数
        return `名前は: ${this.name}さん, 年齢は${this.age}歳ですね`
    }
}

let taro = new Person('Taro', 30);

console.log(taro.profile());
