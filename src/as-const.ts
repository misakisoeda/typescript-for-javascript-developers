export {};

let name = 'Soeda';
name = 'Soe';

let nickname = 'Soe' as const;  //Soe型、定数
// nickname = 'Soeda'; //代入できない
nickname = 'Soe';

//以下は変数
// let profile = {
//     name: 'Misaki',
//     height: 160
// };

// profile.name = 'Soe';
// profile.height = 170;

//全ての要素が定数になる（realonly）
let profile = {
    name: 'Misaki',
    height: 160
} as const;

// profile.name = 'Soe'; //代入できない
// profile.height = 170; //代入できない