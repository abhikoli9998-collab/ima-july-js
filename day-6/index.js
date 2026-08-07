1. Create an Employee Object

* Create an employee object with 5 properties:
    * name
    * id
    * department
    * salary
    * experience
* Add a showEmployeeDetails() method that displays all the employee information using this.

const employee = {
  name: "Abhishek k",
  id: 21,
  department: "IT",
  salary: 15000,
  experience: 2 +"year",
  EmployeeDetails: function() {
    console.log("Name :", this.name);
    console.log("ID :", this.id);
    console.log("Department :", this.department);
    console.log("Salary :", this.salary);
    console.log("Experience :", this.experience);
  }
};
console.log(employee.EmployeeDetails());

2. Create a Bike Object

* Create a bike object with properties:
    * brand
    * model
    * color
* Add two methods:
    * start()
    * stop()
* Use the this keyword inside both methods to display the bike’s brand.

const bike = {
  brand: "BMW",
  model: "G310RR",
  color: "Black",
  start: function() {
    console.log(this.brand +" bike has started.");
  },
  stop: function() {
    console.log(this.brand +" bike has stopped.");
  }
};
console.log(bike.start());
console.log(bike.stop());

3. Create a Wallet Object

* Create a wallet object with:
    * ownerName
    * balance
* Add two methods:
    * addMoney(amount)
    * spendMoney(amount)
* Update the balance using this and display the remaining balance after each operation.

const wallet = {
    Name: "Abhishek",
    balance: 100000,
    addMoney: function (amount) {
        this.balance += amount;
        console.log("Add money:", amount);
        console.log("Remaining balance:", this.balance);
    },
    spendMoney: function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Spent money:", amount);
            console.log("Remaining balance:", this.balance);
        } 
        else {
            console.log("Insufficient balance.");
        }
    }
};
console.log(wallet.addMoney(500));
console.log(wallet.spendMoney(300));
console.log(wallet.spendMoney(1500));

5. Create a Laptop Object

* Create a laptop object with the following properties:
    * brand
    * processor
    * RAM
    * price
* Add a displayInfo() method that prints all the laptop details using the this keyword.

const laptop = {
  brand: "Dell",
  processor: "Intel Core i7",
  RAM: "16 GB",
  price: 1500,
  displayInfo: function() {
    console.log(this.brand);
    console.log(this.processor);
    console.log(this.RAM);
    console.log(this.price);
  }
};
console.log(laptop.displayInfo());
