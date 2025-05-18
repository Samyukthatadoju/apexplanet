const products = [
{ name: "Laptop", category: "electronics", price: 75000 },
{ name: "Phone", category: "electronics", price: 8000 },
{ name: "Earphones", category: "electronics", price: 1500},
{ name: "Bluetooth", category: "electronics", price: 2000},
{ name: "Charger", category: "electronics", price: 450},
{ name: "Cable", category: "electronics", price: 1000},
{ name: "Tab", category: "electronics", price: 25000},
{ name: "Headphones", category: "electronics", price: 15000},
{ name: "Book", category: "stationary", price: 40 },
{ name: "Pen", category: "stationary", price: 10 },
{ name: "Pencil", category: "stationary", price: 30 },
{ name: "Dairy", category: "stationary", price: 100 },
{ name: "Eraser", category: "stationary", price: 5 },
{ name: "Pouch", category: "stationary", price: 50 },
{ name: "Plank", category: "stationary", price: 150 }
];
function displayProducts(items) {
const container = document.getElementById("productContainer");
container.innerHTML = "";
items.forEach(product => {
const div = document.createElement("div");
div.textContent = `${product.name} - $${product.price}`;
container.appendChild(div);
});
}
function applyFilters() {
const category = document.getElementById("categoryFilter").value;
const sort = document.getElementById("sortPrice").value;
let filtered = products.filter(p => category === "all" || p.category === category);
if (sort === "asc") {
filtered.sort((a, b) => a.price - b.price);
} 
else 
{
filtered.sort((a, b) => b.price - a.price);
}
displayProducts(filtered);
}
document.getElementById("categoryFilter").addEventListener("change", applyFilters);
document.getElementById("sortPrice").addEventListener("change", applyFilters);
window.onload = () => displayProducts(products);