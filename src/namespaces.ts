export {};

namespace Japanese {
    export namespace Tokyo {
        export class Person {   //export 外の空間からアクセスできるようになる
            constructor(public name: string) {}
        }
    }
    export namespace Osaka {
        export class Person {
            constructor(public name: string) {}
        }
    }
}

namespace English {
    export class Person {
        constructor(
            public firstName: string,
            public middleName: string,
            public lasttName: string
        ) {}
    }
}

const me = new Japanese.Tokyo.Person('そえ');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('そえやん');
console.log(meOsaka.name);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);