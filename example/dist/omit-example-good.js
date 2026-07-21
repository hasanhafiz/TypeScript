// dynamically add user to User type array and generate auto-incremented id for each user
const users = [];
console.log(users);
let lastId = 0;
function addUser(newUser) {
    const pushUser = {
        id: lastId++,
        ...newUser,
    };
    users.push(pushUser);
    return pushUser;
}
const user1 = addUser({ name: 'hasan', email: 'hasan@example.com' });
const user2 = addUser({ name: 'hasan 2', email: 'hasan2@example.com' });
console.log(user1);
console.log(users);
export {};
//# sourceMappingURL=omit-example-good.js.map