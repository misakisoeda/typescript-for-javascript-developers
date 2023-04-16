export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

//除外
type FunctionType = Exclude<SomeTypes, string | number>;  //string | numberを除外指定できる
type NonFunctionType = Exclude<SomeTypes, DebugType>;  //DebugTypeを除外指定できる
type TypeExcludingFunction = Exclude<SomeTypes, Function>;  //型そのものを除外指定できる

//抽出
type FunctionTypeExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeExtract = Extract<SomeTypes, string | number>;
type TypeExtractFunction = Extract<SomeTypes, Function>;

//null および undefined を除いた型を取得
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;