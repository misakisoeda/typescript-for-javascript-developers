export {};

function add(a: number, b: number) {
    return a + b;
}

console.log(add(1,2));

type ReturnTypeFromAdd = ReturnType<typeof add>;

// ↓
// 正体
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
// ↓
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

// (...args: any) => any
// 関数の型

// infer
// 条件の１部としてジェネリクスを宣言できるという役割
// ↓
// <>じゃない
// <>は、型の直後にしか書けない
// Conditional Typesは無数にできる
// infer R 戻り値の型がR
// Rが１００％選ばれるので、型が戻ってくる
// ↓
// つまりは
// 推論するということ
// 型として推論した結果をRに代入するということ


// inferの勉強