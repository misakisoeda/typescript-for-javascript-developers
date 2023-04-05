export {};

class Person {
    public name: string;    //アクセス修飾子　書かないのが一般的
    // private age: number;    //アクセス修飾子　制約したいとき Personクラスだけ許される　継承ではエラーが出る
    protected age: number;      //下のconsole.log(taro.age);ではエラーが出る
    protected nationality: string;  //アクセス修飾子

    constructor (name: string, age: number, nationality: string) { //メソッド　戻り値に対応する型は設定しないルール　リターンしない
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }

    profile(): string { //メソッド&関数
        return `名前は: ${this.name}さん, 年齢は${this.age}歳ですね`
    }
}

class Android extends Person {  //パーソンクラスを継承したアンドロイド

    constructor (name: string, age: number, nationality: string) {
        super(name, age, nationality); //親クラスのconstructorメソッドを読み出せる
    }

    profile(): string {
        return `名前は: ${this.name}さん, 年齢は${this.age}歳ですね, 国籍は: ${this.nationality}`;
    }
}

let taro = new Person('Taro', 30, '日本');

console.log(taro.profile());
console.log(taro.name);
// console.log(taro.age);
