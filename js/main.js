// بيانات مبدئية للمنتجات
const products = [
  {
    id: 1,
    name: "Smartphone XYZ",
    category: "Electronics",
    price: 499,
    image: "assets/images/smartphone.jpg"
  },
  {
    id: 2,
    name: "T-Shirt Cool",
    category: "Clothing",
    price: 29,
    image: "assets/images/tshirt.jpg"
  },
  {
    id: 3,
    name: "Novel Book",
    category: "Books",
    price: 19,
    image: "assets/images/book.jpg"
  },
  {
    id: 4,
    name: "Toy Car",
    category: "Toys",
    price: 25,
    image: "assets/images/toycar.jpg"
  }
];

// تحميل المنتجات للواجهة
function loadProducts() {
  const grid = document.getElementById('product-grid');
  grid.innerHTML = '';
  products.forEach(prod => {
    const productDiv = document.createElement('div');
    productDiv.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}" style="width:100%; height:150px; object-fit:cover; border-radius:5px;" />
      <h3>${prod.name}</h3>
      <p>$${prod.price}</p>
      <button onclick="addToCart(${prod.id})">Add to Cart</button>
    `;
    grid.appendChild(productDiv);
  });
}

function searchProducts() {
  const term = document.getElementById('search-input').value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(term));
  const grid = document.getElementById('product-grid');
  grid.innerHTML = '';
  filtered.forEach(prod => {
    const productDiv = document.createElement('div');
    productDiv.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}" style="width:100%; height:150px; object-fit:cover; border-radius:5px;" />
      <h3>${prod.name}</h3>
      <p>$${prod.price}</p>
      <button onclick="addToCart(${prod.id})">Add to Cart</button>
    `;
    grid.appendChild(productDiv);
  });
}

// إضافة منتج للعربة (بشكل مبدئي فقط تنبيه)
function addToCart(productId) {
  alert("Added product " + productId + " to cart!");
}

// أول ما تحمل الصفحة، حمل المنتجات
window.onload = loadProducts;
