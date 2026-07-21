// dynamically add user to User type array and generate auto-incremented id for each user
const users = [];
console.log(users);
let lastId = 0;
function addUser(name, email) {
    const newUser = {
        id: lastId++,
        name,
        email
    };
    users.push(newUser);
    return newUser;
}
const user1 = addUser('hasan', 'hasan@example.com');
const user2 = addUser('hasan 2', 'hasan2@example.com');
console.log(user1);
console.log(users);
export {};
//# sourceMappingURL=omit-example.js.map