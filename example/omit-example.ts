// dynamically add user to User type array and generate auto-incremented id for each user

type User = {
    id: number,
    name: string,
    email: string
}

const users: User[] = [];

console.log(users);

let lastId: number = 0;

function addUser(name: string, email: string): User {
    const newUser: User = {
        id: lastId++,
        name,
        email
    }
    users.push(newUser);
    return newUser;
}

const user1 = addUser('hasan', 'hasan@example.com');
const user2 = addUser('hasan 2', 'hasan2@example.com');
console.log(user1);

console.log(users);