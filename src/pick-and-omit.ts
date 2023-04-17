export {};

type DetailedProfile = {
    name: string;
    height: number;
    weight: number;
};


//欲しいものを選択
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
// ↓
// 正体
// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// };


//除外するものを選択
type SmallProfile = Omit<DetailedProfile, 'height'>;
// ↓
// 正体
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
// ↓
// 解剖してみる
// type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
// type MySmallOmit = MyOmit<DetailedProfile, 'height'>;
// ↓
// type MyOmit<T> = Pick<T, Exclude<keyof T, 'height'>>;
// type MySmallOmit = MyOmit<DetailedProfile>;
// ↓
// type MyOmit = Pick<DetailedProfile, Exclude<'name' | 'height' | 'weight', 'height'>>;
// type MySmallOmit = MyOmit;
// ↓
type MyOmit = Pick<DetailedProfile, 'name' | 'weight'>;
type MySmallOmit = MyOmit;