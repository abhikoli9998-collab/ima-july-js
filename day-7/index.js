// 1. Student Result
let student = {
    name: "abhishek",
    marks: 90,
    checkResult: function () {
        if (this.name) {
            console.log("Name : " + this.name);
            if (this.marks >= 35) {
                console.log("Pass");
            } else {
                console.log("Fail");
            }
        }
    }
}
console.log(student.checkResult());
// // 2. Mobile Discount
let mobile = {
    brand: "Samsung",
    price: 35000,
    checkDiscount: function () {
        if (this.price >= 30000) {
            console.log("Brand : " + this.brand);
            console.log("10% Discount Available");
        } else {
            console.log("No Discount");
        }
    }
}
console.log(mobile.checkDiscount());
// // 3. Bank Account
// Create a bankAccount object with:

let bankAccount = {
    accountHolder: "Abhishek",
    balance: 10000,
    withdraw: function (amount) {
        if (this.balance >= 2000) {
            console.log("Account Holder : " + this.accountHolder);
            console.log("Withdrawal Successful");
        } else {
            console.log("Insufficient Balance");
        }
    }
}
console.log(bankAccount.withdraw());

// 4. Employee Bonus
let employee = {
    name: "Abhishek",
    salary: 60000,
    checkBonus: function (salary) {
        if (salary >= 50000) {
            console.log("Name : " + employee.name);
            console.log("Bonus Eligible");
        } else {
            console.log("Not Eligible for Bonus");
        }
    }
}
console.log(employee.checkBonus(employee.salary));
// 5. Shopping Cart
let itemName = {
    name: "Laptop",
    price: 1200,
    checkCart: function (price) {   
if (price >= 1000) {
    console.log("Item Name : " + itemName.name);
    console.log("Free Shipping Available");
} else {
    console.log("Shipping Charges Apply");
}
}
}
console.log(itemName.checkCart(itemName.price));
// 6. Movie Ticket
let ticket = {
    name: "Abhishek",
    age: 20,
    checkTicket: function () {
        if (this.age >= 18) {
            console.log("Name : " + this.name);
            console.log("Allowed to Watch Movie");
        } else {
    console.log("Not Allowed to Watch Movie");
}
}
}
console.log(ticket.checkTicket());
7. Laptop Warranty
let laptop = {
    brand: "Dell",
    warrantyYears: 3,
    checkWarranty: function () {
        if (this.warrantyYears >= 2) {
            console.log("Brand : " + this.brand);
            console.log("Extended Warranty Available");
        } else {
    console.log("Standard Warranty");
}
}
}
console.log(laptop.checkWarranty());
// 8. Product Stock
let product = {
    name: "Smartphone",
    stock: 5,
    checkStock: function () {
        if (this.stock > 2) {
            console.log("Product Name : " + this.name);
            console.log("Product Available");
        } else {
            console.log("Out of Stock");
        }
    }
}
console.log(product.checkStock());
// 9.User Login
let user = {
    username: "abhishek",
    password: "2216"
}
user.login = function(inputPassword) {
if (inputPassword === user.password) {
    console.log("Username : " + user.username);
    console.log("Login Successful");
} else {
    console.log("Invalid Password");
}
}
console.log(user.login("2216"));

// 10. Basic Array Check (No Loops)

let fruits = ["canberry", "Banana", "apple"];
function checkFruit(fruitName) {
    if (fruitName === fruits[0] || fruitName === fruits[1] || fruitName === fruits[2]) {
        console.log("Fruit Found");
    } else {
        console.log("Fruit Not Found");
    }
}
checkFruit("Banana");
checkFruit("Grapes");