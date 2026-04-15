// Task 1: Order System (setTimeout)

console.log("Order placed");

setTimeout(() => {
  console.log("Preparing food");
}, 3000);

setTimeout(() => {
  console.log("Food ready");
}, 6000);

setTimeout(() => {
  console.log("Delivered");
}, 8000);

// Task 2: Digital Clock (setInterval)

let count = 0;

let clock = setInterval(() => {
  let time = new Date().toLocaleTimeString();
  console.log(time);

  count++;

  if (count === 10) {
    clearInterval(clock);
    console.log("Clock stopped");
  }
}, 1000);

// Task 3: Callback Hell Simulation

function loginUser(callback) {
  setTimeout(() => {
    console.log("User Logged In");
    callback();
  }, 1000);
}

function getUserData(callback) {
  setTimeout(() => {
    console.log("User Data Fetched");
    callback();
  }, 1000);
}

function getUserPosts() {
  setTimeout(() => {
    console.log("User Posts Fetched");
  }, 1000);
}


loginUser(() => {
  getUserData(() => {
    getUserPosts();
  });
});

// Task 4: Fake API Promise

function getProducts() {
  return new Promise((resolve, reject) => {
    let success = true; 

    setTimeout(() => {
      if (success) {
        resolve(["Shirt", "Shoes", "Cap"]);
      } else {
        reject("API Failed");
      }
    }, 2000);
  });
}

getProducts()
  .then((data) => {
    console.log("Products:", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Request Completed");
  });