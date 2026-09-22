// const numbers = [12, 45, 7, 89, 34, 67, 89];
// function secondLargest(num) {
//     let max = -Infinity, second = -Infinity;
//     for (let n of num) {
//         if (n > max) {
//             second = max;
//             max = n;
//         } else if (n > second && n < max) {
//             second = n;
//         }
//     }
//     return second;
// }

// console.log(secondLargest(numbers));

// const numbers = [10, 20, 10, 30, 20, 40, 30, 50];
// function removeDuplicates (num){
//     return [...new Set(num)];
// }
// console.log(removeDuplicates(numbers));

// const text = "javascript";
// function countChar(num) {
//     let count = {};
//     for (let char of num) {
//         count[char] = (count[char] || 0) + 1;
//     }
//     return count;
// }
// console.log(countChar(text));

// const numbers = [12, 5, 8, 21, 44, 7, 10, 3];

// let even = numbers.filter(n => n % 2 === 0);
// let sum = even.reduce((a, b) => a + b, 0);

// console.log("Even numbers:", even);
// console.log("Sum:", sum);

// const students = [
//     { name: "Amit", marks: 45 },
//     { name: "Riya", marks: 78 },
//     { name: "Kunal", marks: 32 },
//     { name: "Sneha", marks: 91 },
//     { name: "Rahul", marks: 55 }
// ];

// const passed = students.filter(s => s.marks >= 50).map(s => s.name);

// console.log(passed);

// const products = [
//     { name: "Laptop", price: 55000 },
//     { name: "Mouse", price: 800 },
//     { name: "Keyboard", price: 1500 },
//     { name: "Monitor", price: 12000 }
// ];

// function expensive(laptop) {
//     return laptop.reduce((max, p) => p.price > max.price ? p : max);
// }

// console.log(expensive(products));

// function isPalindrome(str) {
//     return str === str.split("").reverse().join("");
// }

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));

// const cart = [
//     { name: "T-Shirt", price: 500, quantity: 2 },
//     { name: "Jeans", price: 1200, quantity: 1 },
//     { name: "Shoes", price: 2000, quantity: 2 }
// ];
// let total = 0;
// cart.forEach(item => {
//     let price = item.price * item.quantity;
//     total += price;
//     console.log(item.name + ": " + price);
// });

// console.log("Grand Total:", total);