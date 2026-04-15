// Task 1- E-commerce Cart Total

let cart = [
  {name: "Shirt", price: 500, qty: 2},
  {name: "Shoes", price: 1500, qty: 1},
  {name: "Cap", price: 300, qty: 3}
];


let total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
console.log("Total:", total);


let expensive = cart.filter(item => item.price > 1000);
console.log(expensive);


let names = cart.map(item => item.name.toUpperCase());
console.log(names);


// Task 2 - Student Result System

let students = [
  {name: "Arun", marks: 85},
  {name: "Bala", marks: 45},
  {name: "Charan", marks: 60},
  {name: "Divya", marks: 30}
];
let failed = students.filter(s => s.marks < 50);
console.log(failed);
 
let distinction = students.filter(s => s.marks > 80);
console.log(distinction);

let allPassed = students.filter(s => s.marks > 35);
console.log(allPassed);

let firstFail = students.filter(s => s.marks < 50);
console.log(firstFail);

// Task 3 - Employee Salary Analysis

let employees = [
  {name: "A", salary: 25000},
  {name: "B", salary: 40000},
  {name: "C", salary: 15000},
  {name: "D", salary: 50000}
];

let updated = employees.map(e => ({
  ...e,
  salary: e.salary * 1.1
}));
console.log(updated);
let highPaid = employees.filter(e => e.salary > 30000);
console.log(highPaid);

let totalSalary = employees.reduce((sum, e) => sum + e.salary, 0);
console.log(totalSalary);

let sorted = [...employees].sort((a, b) => b.salary - a.salary);
console.log(sorted);

// Task 4 - String Real Use Case 

let products = ["Laptop", "Mobile", "Tablet", "Camera"];

console.log(products.includes("Mobile"));

let lower = products.map(p => p.toLowerCase());
console.log(lower);

console.log(products.indexOf("Tablet"));

console.log(products.join("-"));

// Task 5 - Date Real-Time Task

let dob = new Date("2000-10-09"); 
let today = new Date();

let age = today.getFullYear() - dob.getFullYear();

console.log(`You are ${age} years old`);

// Task 6 - Login Validation System

let users = [
  {username: "admin", password: "1234"},
  {username: "user", password: "abcd"}
];

let inputUser = "admin";
let inputPass = "1234";

let found = users.find(u => u.username === inputUser && u.password === inputPass);

if(found){
  console.log("Login Success ");
} else {
  console.log("Invalid Credentials ");
}

// Task 7 - Even Number Analyzer

let numbers = [10, 15, 20, 25, 30];

let evens = numbers.filter(n => n % 2 === 0);
console.log(evens);

let hasOdd = numbers.filter(n => n % 2 !== 0);
console.log(hasOdd);

let allEven = numbers.filter(n => n % 2 === 0);
console.log(allEven);

let first = numbers.find(n => n > 20);
console.log(first);

//  Bonus Challenge 

let orders = [
  {id: 1, amount: 500, status: "delivered"},
  {id: 2, amount: 1500, status: "pending"},
  {id: 3, amount: 2000, status: "delivered"}
];


let revenue = orders
  .filter(o => o.status === "delivered")
  .reduce((sum, o) => sum + o.amount, 0);
console.log(revenue);

let pending = orders.filter(o => o.status === "pending");
console.log(pending);

let bigOrder = orders.some(o => o.amount > 1000);
console.log(bigOrder);

let sortedOrders = [...orders].sort((a, b) => a.amount - b.amount);
console.log(sortedOrders);
