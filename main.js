document.addEventListener('DOMContentLoaded', () => {
  const productsContainer = document.createElement('div');
  productsContainer.className = 'products';

  const product = document.createElement('div');
  product.className = 'product';
  product.innerHTML = `
    <h3>Product 1</h3>
    <p>Price: $19.99</p>
    <button>Add to Cart</button>
  `;

  productsContainer.appendChild(product);
  document.body.appendChild(productsContainer);
});
