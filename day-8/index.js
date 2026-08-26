// // 1. Student Result
// // Create an array of student objects (name, marks). Print each student’s name and whether they Pass or Fail (Pass marks = 35).
// let students = [
//     { name: "deepak", marks: 45 },
//     { name: "amit", marks: 30 },
//     { name: "abhishek", marks: 50 },
//     { name: "kaveri", marks: 20 }
// ];
// for (let i = 0; i < students.length; i++) {
//     let student = students[i];
//     let result = student.marks >= 35 ? "Pass" : "Fail";
//    console.log(student.name + " : " + result);
// }
        
// // 2. Expensive Products
// // Create an array of product objects (name, price). Print only the products whose price is greater than ₹1000.
//  let products = [
//     { name: "Laptop", price: 500 },
//     { name: "Mobile", price: 100 },
//     { name: "Tablet", price: 2000 },
//     { name: "Headphones", price: 1200 }
// ];
// for (let i = 0; i < products.length; i++) {
//     let product = products[i];
//     if (product.price > 1000) {
//         console.log(product.name + " : " + product.price);
//     }
// }

// // 3. Even and Odd Count
// // Store 15 numbers in an array. Using a loop, count how many numbers are even and how many are odd.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let evenCount = 0;
// let oddCount = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         evenCount++;
//     } else {
//         oddCount++;
//     }
// }
// console.log("Even numbers: " + evenCount);
// console.log("Odd numbers: " + oddCount);

// // 4. Employee Bonus
// // Create an array of employee objects (name, salary).
// // * If salary is greater than 50000, print "Bonus Eligible".
// // * Otherwise, print "Not Eligible".
// let employees = [
//     { name: "deepak", salary: 60000 },
//     { name: "yash", salary: 40000 },
//     { name: "vishal", salary: 55000 },
//     { name: "abhi", salary: 30000 }
// ];
// for (let i = 0; i < employees.length; i++) {
//     let employee = employees[i];
//     let eligibility = employee.salary > 50000 ? "Bonus Eligible" : "Not Eligible";
//     console.log(employee.name + " : " + eligibility);
// }

// // 5. Largest Even Number
// // Store numbers in an array and find the largest even number using a loop.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let largestEven = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         if (numbers[i] > largestEven) {
//             largestEven = numbers[i];
//         }
//     }
// }
// console.log("Largest even number: " + largestEven);


// // 6. Car Details
// Create an array of car objects (brand, price, fuelType).
// Print only the cars:
// * whose price is less than ₹10,00,000
// * and fuel type is "Petrol".
let cars = [
    { brand: "Maruti", price: 800000, fuelType: "Petrol" },
    { brand: "Hyundai", price: 1200000, fuelType: "Diesel" },
    { brand: "Tata", price: 900000, fuelType: "Petrol" }
];
for (let i = 0; i < cars.length; i++) {
    let car = cars[i];
    if (car.price < 1000000 && car.fuelType === "Petrol") {
        console.log(car.brand + " : " + car.price);
    }
}

// 7. Shopping Cart
// let products = [
    { name: "Shirt", price: 1000, quantity: 2 },
    { name: "Jeans", price: 2000, quantity: 1 },
    { name: "Shoes", price: 4000, quantity: 1 }
];
let totalBill = 0;
for (let i = 0; i < products.length; i++) {
    let product = products[i];
    totalBill += product.price * product.quantity;
}
if (totalBill > 5000) {
    console.log("Discount Applied");
} else {
    console.log("No Discount");
}
console.log("Total Bill: " + totalBill);

// 8. Voting Eligibility
// let persons = [
//     { name: "deepak", age: 20 },
//     { name: "yash", age: 17 },
//     { name: "vishal", age: 25 },
//     { name: "abhi", age: 20 }
// ];
// for (let i = 0; i < persons.length; i++) {
//     let person = persons[i];
//     let eligibility = person.age >= 18 ? "Eligible to Vote" : "Not Eligible";
//     console.log(person.name + " : " + eligibility);
// }

// 9. Highest Marks
let students = [
    { name: "deepak", marks: 45 },
    { name: "amit", marks: 30 },
    { name: "abhishek", marks: 50 },
    { name: "kaveri", marks: 20 }
];
let highestStudent = students[0];
for (let i = 1; i < students.length; i++) {
    if (students[i].marks > highestStudent.marks) {
        highestStudent = students[i];
    }
}
console.log("Highest Marks: " + highestStudent.name + " : " + highestStudent.marks);

// 10. Bank Accounts
let accounts = [
    { name: "deepak", balance: 500 },
    { name: "yash", balance: 1500 },
    { name: "vishal", balance: 800 },
    { name: "abhi", balance: 2000 }
];
for (let i = 0; i < accounts.length; i++) {
    let account = accounts[i];
    if (account.balance < 1000) {
        console.log("Low Balance: " + account.name);
    } else {
        console.log("Balance OK: " + account.name);
    }
}