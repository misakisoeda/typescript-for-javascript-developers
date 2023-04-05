export {};

// class Mohotsukai {}
// class Souryo {}
// class Taro extends Mohotsukai, Souryo {} //TSでは単一クラス継承のためエラー。インターフェースなら多重継承ができる！

interface Kenjya {  //インターフェース
    ionazun(): void;    //シグネチャー
}

interface Senshi {
    kougeki(): void;    //シグネチャー
}

class Jiro implements Kenjya, Senshi { //実装
    ionazun(): void {
        console.log('イオナズン')
    }
    kougeki(): void {
        console.log('攻撃')
    }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();