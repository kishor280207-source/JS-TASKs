let allProducts = [];
let filteredProducts = [];

const container = document.getElementById("products");
const loader = document.getElementById("loader");
const error = document.getElementById("error");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");

async function fetchProducts() {
  try {
    loader.style.display = "block";

    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();

    allProducts = data;
    filteredProducts = data;

    displayProducts(filteredProducts);
    loader.style.display = "none";

  } catch (err) {
    loader.style.display = "none";
    error.innerText = "Error loading data";
  }
}

function displayProducts(products) {
  container.innerHTML = "";

  products.forEach(p => {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.image}">
      <h3>${p.title.substring(0,20)}...</h3>
      <p>${p.description.substring(0,60)}...</p>
      <button>₹ ${p.price}</button>
      <button onclick='viewDetails(${JSON.stringify(p)})'>View More</button>
    `;

    container.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  let value = searchInput.value.toLowerCase();
  filteredProducts = allProducts.filter(p =>
    p.title.toLowerCase().includes(value)
  );
  displayProducts(filteredProducts);
});

categorySelect.addEventListener("change", () => {
  let value = categorySelect.value;

  if (value === "all") {
    filteredProducts = allProducts;
  } else {
    filteredProducts = allProducts.filter(p =>
      p.category === value
    );
  }

  displayProducts(filteredProducts);
});

function sortLowHigh() {
  filteredProducts.sort((a,b) => a.price - b.price);
  displayProducts(filteredProducts);
}

function sortHighLow() {
  filteredProducts.sort((a,b) => b.price - a.price);
  displayProducts(filteredProducts);
}

function viewDetails(product) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modalData").innerHTML = `
    <h2>${product.title}</h2>
    <img src="${product.image}" height="200">
    <p>${product.description}</p>
    <h3>₹ ${product.price}</h3>
  `;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}


fetchProducts();