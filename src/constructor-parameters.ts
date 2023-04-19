export {};

class Person {
    name: string;
    age: number;

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let taro = new Person('Taro', 30);
console.log(taro);

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>;   //タプル型

const pforile: Profile = ['Soeda', 34];
const soe = new Person(...pforile);
console.log(soe);

// ↓
// ConstructorParameters 正体
// type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;
// ↓
type MyConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;
// ↓
// newがある　つまり、クラスの型の必要がある