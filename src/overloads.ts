export {};

function double (value: number): number;    //シグネチャー
function double (value: string): string;    //シグネチャー

function double (value: any): any { //実態の方には型制約しない（シグネチャーが行うため）
    console.log(typeof value);  //型を教えてくれる
    if (typeof value === 'number') {
        return value * 2;
    } else {
        return value + value;
    }
}

console.log(double(100));
console.log(double('Go '));
// console.log(double(true));