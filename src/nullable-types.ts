export {};

// tsconfig.jsonの"strictNullChecks"をfalseに変更してしまうと、ヌーラブルな状態になってしまう..（秩序のないコード）

let profile: { name: string; age: number | null } = {   //ユニオン型にする
    name: "Soeda",
    age: null   //具体的な数値が設定できない..
}