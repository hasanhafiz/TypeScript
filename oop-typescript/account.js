"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    name;
    balance;
    isLimited = false;
    limit = 0;
    // also we can not anotate id: number, name: string, balance: number in JS
    // So, we need to use TS
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance = this.balance + amount;
    }
    withdraw(amount) {
        if (this.isLimited && this.limit < amount) {
            throw new Error(`You can not withdraw more than ${this.limit} amount`);
        }
        if (this.balance < amount) {
            throw new Error(`Insufficient balance. Max withdraw amount ${this.balance}`);
        }
        this.balance = this.balance - amount;
    }
    status() {
        console.log(`this ${this.id} ${this.name} has a balance of ${this.balance} `);
    }
}
class StudentAccount extends Account {
    isLimited = true;
    limit = 10000;
}
class SavingsAccount extends Account {
    isLimited = true;
    limit = 50000;
}
// using parameter property promotion
// class Account {
//     constructor(public readonly id: number, public name: string, protected balance: number) {
//         console.log('class initiated!')
//     }
// }
let student = new StudentAccount(101, 'Hasan Hafiz', 50000);
student.status();
student.withdraw(5000);
student.withdraw(10000);
student.status();
