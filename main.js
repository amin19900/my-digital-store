document.addEventListener("DOMContentLoaded", () => {
  fetch("products.json")
    .then((res) => res.json())
    .then((products) => {
      const container = document.createElement("div");
      container.className = "products";

      products.forEach((product) => {
        const card = document.createElement("div");
        card.className = "product";
        card.innerHTML = `
          <img src="${product.image}" alt="${product.title}" style="width:100%; border-radius: 6px;">
          <h3>${product.title}</h3>
          <p style="color:green; font-weight:bold;">${product.price}</p>
          <button class="btn">Buy</button>
        `;
        container.appendChild(card);
      });

      document.querySelector("main").appendChild(container);
    })
    .catch((err) => {
      console.error("Error loading products:", err);
    });
});
