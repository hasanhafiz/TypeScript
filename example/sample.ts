// tuple type
// A tuple type allows you to express an array with a fixed number of elements whose types are known,
// but need not be the same.
type Division = [number, number];

function divide(a: number, b: number): Division {
    const quotient = Math.floor(a / b);
    const remainder = a % b;
    return [quotient, remainder];
}

const result = divide(10, 3);
const result2 = divide(4,2);
console.log(result);
console.log(result2);