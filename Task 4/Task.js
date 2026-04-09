//Task 1  E-Commerce Discount System

function calculateDiscount(product, price) {
    let finalPrice;

    if (price > 1000) {
        finalPrice = price * 0.8;
    } else {
        finalPrice = price * 0.9;
    }

    console.log(`Product: ${product}`);
    console.log(`Final Price: ${finalPrice}`);
}

calculateDiscount("Shoes", 2000);

// Task 2  Order Processing using Callback

function payment(amount) {
    console.log(`Payment of ${amount} successful`);
}

function orderSuccess() {
    console.log("Order delivered");
}

function placeOrder(callback) {
    console.log("Order placed");
    callback(500);
    orderSuccess();
}

placeOrder(payment);

// Task 3   Employee Data Loop System

let employees = [
    { name: "priya", salary: 50000 },
    { name: "kumar", salary: 70000 }
];

for (let emp of employees) {
    if (emp.salary > 60000) {
        console.log(emp.name + " Have a High Salary");
    } else {
        console.log(emp.name + " Have a Normal Salary");
    }
}

// Task 4 Login Attempts

let correctPassword = "1234";
let attempts = 0;

while (attempts < 3) {
    attempts++;
    console.log("Attempt " + attempts);

    let entered = "1234"; // simulate input

    if (entered === correctPassword) {
        console.log("Login success");
        break;
    }
}

// Task 5  Coupon Generator

function* offers() {
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Cashback";
}

let gen = offers();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// Task 6 Shopping Cart Total

let cart = [100, 200, 300, 400];
let total = 0;

for (let price of cart) {
    total += price;
}

console.log("Total Bill:", total);

// Task 7 User Profile

let user = {
    name: "Navi",
    role: "Developer",
    location: "India"
};

for (let key in user) {
    console.log(`${key} : ${user[key]}`);
}

// Task 8 Factory Pattern

function createPhone() {
    return "Phone";
}

function createBattery() {
    return "Battery";
}

function createCharger() {
    return "Charger";
}

function createOrder() {
    return `${createPhone()} + ${createBattery()} + ${createCharger()}`;
}

console.log("Your Order:", createOrder());

// TAsk 9 Default Parameters

function collegeForm(name, department = "Not Assigned") {
    console.log("Name:", name);
    console.log("Department:", department);
}

collegeForm("Kishor");

// Task 10 Currying

function emi(p) {
    return function (r) {
        return function (t) {
            return (p * r * t) / 100;
        };
    };
}

console.log("EMI:", emi(10000)(2)(12));

// task 11 Even/Odd Analyzer

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " - Even");
    } else {
        console.log(i + " - Odd");
    }
}

// Task 12  Function Scope Debugging

if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a); 
// console.log(b);
// console.log(c);

// Task 13 Real-Time Alert System

(function () {
    console.log("Flash Sale: 50% OFF on Shirts");
})();

// Task 14 Marks Calcugit commit -m "Added Task 4 files"lator

function marks(a, b, c) {
    let total = a + b + c;
    let avg = total / 3;

    return {
        total: total,
        average: avg
    };
}

let result = marks(80, 90, 70);
console.log("Total:", result.total);
console.log("Average:", result.average);

// Task 15 Retry Offer System 

function* retryOffers() {
    yield "10% OFF";
    yield "20% OFF";
}

let offer = retryOffers();

let res1 = offer.next();
let res2 = offer.next();
let res3 = offer.next();

console.log(res1.value);
console.log(res2.value);

if (res3.done) {
    console.log("All offers expired");
}