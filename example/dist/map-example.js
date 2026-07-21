const orders = new Map();
function addOrder(juice) {
    let quantity = 1;
    // let quantity = orders.get(juice) ? 0 : ;
    if (orders.get(juice)) {
        quantity = (orders.get(juice) ?? 0) + 1;
        //    quantity = (orders.get(juice) ?? 0) + 1 ;
        // console.log( (orders.get(juice))   );
        //    quantity = (orders.get(juice) ?? 0) + 1 ;
    }
    // const quantity = (orders.get(juice) ?? 0) + 1; 
    orders.set(juice, quantity);
}
addOrder("Apple");
addOrder("Banana");
addOrder("Apple");
addOrder("Apple");
addOrder("Mango");
console.log(orders);
export {};
//# sourceMappingURL=map-example.js.map