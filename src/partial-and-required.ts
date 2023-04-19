export {};

// UtillityType

type Profile = {
    name: string;
    age?: number;   //オプショナル（任意）にする（あってもなくてもOK）
    zipCode: number;
};


// 全て任意にしたい！となった時
type PartialType = Partial<Profile>;

//ちなみによくない例
// type Profile2 = {
//     name?: string;
//     age?: number;
// };


// 後から必須にしたい！となった時
type RequiredType = Required<Profile>;