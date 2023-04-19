export {};

const debugProfile = (name: string, age: number) => {
    console.log({ name,age });
};

debugProfile('Soeda', 34);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Gloria', 76];
debugProfile(...profile);   //タプル型を展開するため

// ↓
// Parameters正体
// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
// ↓
type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;