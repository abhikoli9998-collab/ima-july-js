const employee = {
    name: "Rahul",
    age: 25,
    email: "rahul@gmail.com",
    city: "Pune",
    department: "IT",
    salary: 30000
};

console.log(employee)
employee.salary = 40000;
employee.experience = 2;
delete employee.city;
console.log(employee);