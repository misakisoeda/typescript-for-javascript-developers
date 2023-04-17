export {};

// type MyExclude<T, U> = T extends U ? never : T;
// ↓
// type MyExclude<T> = T extends string | number ? never : T;
// ↓
// type MyExclude =
//     | (string extends string | number ? never : string)
//     | (number extends string | number ? never : number)
//     | (DebugType extends string | number ? never : DebugType);
// ↓
// type MyExclude =
//     | never //互換性があるから、trueが選ばれる。ということは、neverになる。
//     | never //互換性があるから、trueが選ばれる。ということは、neverになる。
//     | DebugType;    //互換性がないから、falseが選ばれる。
// ↓
type MyExclude = DebugType;

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

//除外
type FunctionType = Exclude<SomeTypes, string | number>;  //string | numberを除外指定できる
type MyFunctionType = MyExclude;

//抽出
type FunctionTypeExtract = Extract<SomeTypes, DebugType>;

//null および undefined を除いた型を取得
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;