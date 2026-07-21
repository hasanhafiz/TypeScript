function divide(a, b) {
    const quotient = Math.floor(a / b);
    const remainder = a % b;
    return [quotient, remainder];
}
const result = divide(10, 3);
const result2 = divide(4, 2);
console.log(result);
console.log(result2);
export {};
//# sourceMappingURL=sample.js.map