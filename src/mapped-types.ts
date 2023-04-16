export {};

type Profile = {
    name: string;
    age: number;
}

type PartialProfile = Partial<Profile>;

// keyof??
// keyofにカーソルを当てて右クリック Go to Definition
type PropertyTypes = keyof Profile;


//自作するとこうなる
type Optional<T> = {
    [P in keyof T]?: T[P] | null
};
type OptionalProfile = Optional<Profile>;


// MappedTypes => in keyof