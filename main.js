document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      name: "Wireless Headphones",
      price: "$59.99",
      image: "https://via.placeholder.com/200x200?text=Headphones"
    },
    {
      name: "Smartphone Pro",
      price: "$499.00",
      image: "https://via.placeholder.com/200x200?text=Smartphone"
    },
    {
      name: "Fitness Watch",
      price: "$79.99",
      image: "https://via.placeholder.com/200x200?text=Watch"
    },
    {
      name: "4K TV",
      price: "$999.99",
      image: "https://via.placeholder.com/200x200?text=TV+4K"
    }
  ];

  const container = document.getElementById("products-container");
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.price}</p>
    `;
    container.appendChild(card);
  });
});
