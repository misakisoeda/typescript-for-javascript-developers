export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;  //any型はstring型になる

console.log(typeof fooCompatible);


// let fooIncompatible: string;
// let barIncompatible: number = 1;
// fooIncompatible = barIncompatible;  //型の互換性がない = エラーが出る


let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;


let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;


//構造的部分型
interface Animal {
    age: number;
    name: string;
}

class Person {
    constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(40, 'Soeda');
console.log(me);