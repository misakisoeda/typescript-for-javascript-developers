export {};

class Animal {
    constructor(public name: string) {} // 初期化

    run(): string { // メソッド
        return 'I can run';
    }
}

class Lion extends Animal { //継承
    public speed: number;

    constructor(name: string, speed: number) {
        super(name);    //親クラスがやってくれる
        this.speed = speed;
    }

    run(): string {
        // const parentMessage = super.run();    //親クラスのrunメソッドを読んでくれる
        // console.log({parentMessage});
        return `${super.run()} ${this.speed}km/h.`;    //テンプレート文字列
    }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 90).run());