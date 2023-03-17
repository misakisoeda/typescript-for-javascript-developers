export {};

const reducer = (accumulator: number, currentValue: number) => {
    console.log({ accumulator, currentValue });
    return accumulator + currentValue;
}

const sum: (...values: number[]) => number = (...values: number[]): number => {
    return values.reduce(reducer);
}

//総和
console.log(sum(1,2,3,4,5));

// { accumulator: 1, currentValue: 2 }
// { accumulator: 3, currentValue: 3 }
// { accumulator: 6, currentValue: 4 }
// { accumulator: 10, currentValue: 5 }