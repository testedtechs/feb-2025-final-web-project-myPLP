
const products = [
    { id: 1, name: 'Smartphone', price: 499.99, image: 'https://via.placeholder.com/200x150?text=Smartphone' },
    { id: 2, name: 'Laptop', price: 899.99, image: 'https://via.placeholder.com/200x150?text=Laptop' },
    { id: 3, name: 'Headphones', price: 199.99, image: 'https://via.placeholder.com/200x150?text=Headphones' },
    { id: 4, name: 'Smartwatch', price: 149.99, image: 'https://via.placeholder.com/200x150?text=Smartwatch' },
    { id: 5, name: 'Bluetooth Speaker', price: 79.99, image: 'https://via.placeholder.com/200x150?text=Speaker' },
    { id: 6, name: 'Tablet', price: 299.99, image: 'https://via.placeholder.com/200x150?text=Tablet' },
    { id: 7, name: 'Gaming Mouse', price: 49.99, image: 'https://via.placeholder.com/200x150?text=Mouse' },
    { id: 8, name: 'Mechanical Keyboard', price: 89.99, image: 'https://via.placeholder.com/200x150?text=Keyboard' }
];

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.querySelectorAll('#cart-count').forEach(el => el.textContent = cart.length);
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (grid) {
        grid.innerHTML = '';
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = \`
                <img src="\${product.image}" alt="\${product.name}" />
                <h3>\${product.name}</h3>
                <p>$\${product.price.toFixed(2)}</p>
                <button onclick="addToCart(\${product.id})">Add to Cart</button>
            \`;
            grid.appendChild(card);
        });
    }
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(\`\${product.name} added to cart.\`);
}

function renderCart() {
    const cartList = document.getElementById('cart-items');
    const totalText = document.getElementById('total');
    if (!cartList) return;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = \`\${item.name} - $\${item.price.toFixed(2)}\`;
        cartList.appendChild(li);
        total += item.price;
    });
    totalText.textContent = \`Total: $\${total.toFixed(2)}\`;
}

window.onload = function() {
    updateCartCount();
    renderProducts();
    renderCart();
}
