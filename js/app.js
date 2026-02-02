/* 
  APP.JS - NEXUS Store
  Full Cart System with localStorage persistence
*/

// ============ PRODUCT CATALOG ============
const PRODUCTS = {
    'nexus-series-10': {
        id: 'nexus-series-10',
        name: 'Nexus Watch Series 10',
        description: '44mm • Black Sport Band',
        price: 46900,
        image: 'images/products/product_sport_black_1769971143091.png'
    },
    'nexus-se-3': {
        id: 'nexus-se-3',
        name: 'Nexus Watch SE 3',
        description: '44mm • Brown Leather',
        price: 25900,
        image: 'images/products/product_leather_brown_1769971158203.png'
    },
    'nexus-ultra-2': {
        id: 'nexus-ultra-2',
        name: 'Nexus Watch Ultra 2',
        description: '49mm • Natural Titanium',
        price: 89900,
        image: 'images/products/product_steel_silver_1769971174728.png'
    }
};

// ============ CART STATE ============
function getCart() {
    const cart = localStorage.getItem('nexusCart');
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem('nexusCart', JSON.stringify(cart));
    updateCartCount();
}

// ============ CART OPERATIONS ============
function addToCart(productId) {
    const product = PRODUCTS[productId];
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    const cart = getCart();
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            quantity: 1
        });
    }

    saveCart(cart);

    // Show feedback
    showAddedToast(product.name);
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    renderCart();
}

function updateQuantity(productId, delta) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);

    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        if (item.quantity > 10) {
            item.quantity = 10; // Cap at 10
        }
        saveCart(cart);
        renderCart();
    }
}

// ============ CART RENDERING ============
function renderCart() {
    const container = document.getElementById('cart-items-container');
    const emptyState = document.getElementById('cart-empty');
    const summarySection = document.querySelector('.cart-summary');

    if (!container) return; // Not on cart page

    const cart = getCart();

    if (cart.length === 0) {
        container.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        if (summarySection) summarySection.style.display = 'none';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (summarySection) summarySection.style.display = 'block';

    let html = '';
    let subtotal = 0;

    cart.forEach(cartItem => {
        const product = PRODUCTS[cartItem.id];
        if (!product) return;

        const itemTotal = product.price * cartItem.quantity;
        subtotal += itemTotal;

        html += `
            <div class="cart-item" data-id="${product.id}">
                <img src="${product.image}" alt="${product.name}" class="cart-image">
                <div class="item-details">
                    <h3>${product.name}</h3>
                    <p class="item-desc">${product.description}</p>
                    <div class="qty-controls">
                        <button class="btn-qty" onclick="updateQuantity('${product.id}', -1)">−</button>
                        <span class="qty-display">${cartItem.quantity}</span>
                        <button class="btn-qty" onclick="updateQuantity('${product.id}', 1)">+</button>
                    </div>
                </div>
                <div class="item-right">
                    <div class="item-subtotal">₹${itemTotal.toLocaleString('en-IN')}</div>
                    <button class="btn-remove" onclick="removeFromCart('${product.id}')">Remove</button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;

    // Update summary
    const summarySubtotal = document.getElementById('summary-subtotal');
    const summaryTotal = document.getElementById('summary-total');

    if (summarySubtotal) summarySubtotal.textContent = '₹' + subtotal.toLocaleString('en-IN');
    if (summaryTotal) summaryTotal.textContent = '₹' + subtotal.toLocaleString('en-IN');
}

// ============ NAV CART COUNT ============
function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Update all cart links in nav
    const cartLinks = document.querySelectorAll('a[href="cart.html"]');
    cartLinks.forEach(link => {
        if (link.textContent.includes('Cart')) {
            link.textContent = `Cart (${totalItems})`;
        }
    });
}

// ============ TOAST NOTIFICATION ============
function showAddedToast(productName) {
    // Remove existing toast
    const existing = document.querySelector('.cart-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'cart-toast';
    toast.innerHTML = `✓ Added <strong>${productName}</strong> to your bag`;
    document.body.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    // Navigation Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });

    // Update cart count on all pages
    updateCartCount();

    // Render cart if on cart page
    renderCart();

    console.log("NEXUS Store Initialized");
});
