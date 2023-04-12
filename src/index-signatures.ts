export {};

// let profile: { name?: string } = {};    //いちいち追加してられない...
// ↓
// インデックスシグネチャの書き方
// { [ index: typeForIndex ]: typeForValue }
// ↓
// let profile: { [index: string]: string | number } = {};
// ↓　これでもいけるが、もっと綺麗に

interface Profile {
    name: string;   //必須パラメーター
    underTwenty: boolean;   //必須パラメーター
    [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Soe', underTwenty: false };

profile.name = 'Soe';
profile.age = 34;
profile.nationality = 'Japan';