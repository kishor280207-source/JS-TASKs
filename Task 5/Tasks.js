// Task 1: E-commerce Cart System
let cart1 = [
  {name: "Shirt", price: 500},
  {name: "Shoes", price: 1500}
];

let cart2 = [
  {name: "Watch", price: 2000}
];

let mergedCart = [...cart1, ...cart2];

mergedCart.push({name: "Bag", price: 1000});

mergedCart.pop();

let total = mergedCart.reduce((sum, item) => sum + item.price, 0);

console.log(mergedCart);
console.log("Total Price:", total);


// Task 2: User Profile Management

let user = {
  name: "Kishor",
  role: "Trainee",
  salary: 30000
};

let update = {
  role: "Developer",
  salary: 60000
};

let updatedUser = {...user, ...update};


let {name, role, salary} = updatedUser;

console.log(`${name} is now a ${role} earning ${salary}`);

// Task 3: Team Score System

function teamScore(teamName, ...scores) {
  console.log("Team:", teamName);
  console.log("Scores:", scores);

  let total = scores.reduce((sum, s) => sum + s, 0);
  let highest = Math.max(...scores);

  console.log("Total:", total);
  console.log("Highest:", highest);
}

teamScore("CSK", 200, 250, 150);

// Task 4 : API Response Simulation

let apiData = {
  user: {
    name: "kishor",
    address: {
      city: "Bangalore",
      pincode: 560076,
    }
  }
};

let {
  user: {
    Name,
    address: { city, pincode }
  }
} = apiData;

console.log(`${name} lives in ${city} - ${pincode}`);

// Task 5: Admin Panel

let users = ["A", "B", "C", "D", "E"];

users.splice(2, 2, "X", "Y");


let firstThree = users.slice(0, 3);

console.log(users.includes("B"));

console.log(users.indexOf("E"));

console.log(users);
console.log(firstThree);

//  Task 6: Data Cleaning Tool

let messyData = [1, 2, [3, 4, [5]], null, undefined, "Hello"];


let flatData = messyData.flat(Infinity);


let cleanData = flatData.filter(item => item != null);

console.log(cleanData);

// Task 7: Sorting Bug Fix

let prices = [1000, 200, 50, 5000];

prices.sort((a, b) => a - b);

console.log(prices);

// Task 8: Analytics Report Generator

let orders = [
  {id:1, amount:100},
  {id:2, amount:200},
  {id:3, amount:300}
];


let Total = orders.reduce((sum, o) => sum + o.amount, 0);


let avg = total / orders.length;

console.log("Total:", total);
console.log("Average:", avg);

// Task 9: Inventory System

let inventory = ["Pen", "Book"];

inventory.push("Pencil");

inventory.pop();


let index = inventory.indexOf("Book");
if(index !== -1) {
  inventory.splice(index, 1, "Notebook");
}

console.log(inventory.includes("Pen"));

let newStock = ["Eraser", "Scale"];
let finalInventory = [...inventory, ...newStock];

console.log(finalInventory);

// Task 10: Interview Level Challenge

function processData(...data) {

  let flat = data.flat(Infinity);

  
  let unique = [...new Set(flat)];

  return unique.sort((a, b) => a - b);
}

console.log(processData(1,2,[3,4],[5,[6]]));