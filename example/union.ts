type ID = number | string;

const userId: ID = 123; // valid
const productId: ID = "abc"; // valid

function printId(id: ID): void {
    console.log(`ID: ${id}`);
}


printId("g-017");
printId(456);
// printId(bool);