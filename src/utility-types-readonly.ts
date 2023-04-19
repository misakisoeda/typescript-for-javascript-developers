export {};

type Profile = {
    name: string;
    age: number;
};

const me: Profile = {
    name: 'Soe',
    age: 34,
};

me.age++;

console.log(me);


//Readonly型
type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
    name: 'Shigeru',
    age: 40,
};

// friend.age++;


//自作するとこうなる
type YomitoriSenyo<T> = {
    readonly [P in keyof T] : T[P];
};
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;