const users =[
    { name:"rahul", age: 22},
    { name:"amit", age: 28},
    { name:"priya", age: 24}

];

// users.forEach((user) => {
//     console.log(user.name);
// });

// const names = users.map((user) => {
//     return user.name;
// });
// console.log(names);

// const result = users.filter((user) => {
//     return user.age > 25;
// });
// console.log(result);

const result = users.find((user) => {
    return user.name === "priya";
});
console.log(result);

// const products = [
//     { name: "Laptop", price: 50000, category: "Electronic" },
//     { name: "Mobile", price: 25000, category: "Electronic" },
//     { name: "Shoes", price: 3000, category: "Fashion" },
//     { name: "Watch", price: 7000, category: "Fashion" },
//     { name: "Headphones", price: 6000, category: "Electronic" }
// ];

// console.log(products);

// const names = products.map((product) => {
//     return product.name;
// });
// console.log(names);

// const expensive = products.filter((product) => {
//     return product.price > 5000;
// });
// console.log(expensive);

// const product = products.find((product) => {
//     return product.name === "Laptop";
// });
// console.log(product);

// const electronic = products.filter((product) => {
//     return product.category === "Electronic";
// });

// console.log(electronic);