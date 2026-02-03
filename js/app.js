/* 
  APP.JS - NEXUS Store
  Full Cart System with localStorage persistence + Landing Page Interactions
*/

// ============ EXTENDED PRODUCT CATALOG ============
const PRODUCTS = {
  // Watches
  "nexus-series-10": {
    id: "nexus-series-10",
    name: "Nexus Watch Series 10",
    displayName: "Black Beast",
    description: "44mm • Black Sport Band",
    category: "watches",
    price: 46900,
    image: "images/products/product_sport_black_1769971143091.png",
    colors: ["#1d1d1f"],
    features: [
      { icon: "😴", text: "Track the quality of your sleep with sleep score" },
      { icon: "🌡️", text: "Wrist temperature sensing for health insights" },
      { icon: "🔋", text: "All-day 18-hour battery life with fast charging" },
      { icon: "🏃", text: "Stay active with workout types and metrics" },
      { icon: "📱", text: "Call and text without your phone with 5G" },
      { icon: "🆘", text: "Emergency SOS and Fall Detection" },
    ],
    link: "watch-detail.html",
  },
  "nexus-se-3": {
    id: "nexus-se-3",
    name: "Nexus Watch SE 3",
    displayName: "Leather Gold",
    description: "44mm • Brown Leather",
    category: "watches",
    price: 25900,
    image: "images/products/product_leather_brown_1769971158203.png",
    colors: ["#8B5E3C", "#1d1d1f"],
    features: [
      { icon: "😴", text: "Advanced sleep tracking with detailed insights" },
      { icon: "❤️", text: "Heart rate monitoring throughout the day" },
      { icon: "🔋", text: "Up to 18 hours of battery life" },
      { icon: "💧", text: "Water resistant to 50 meters" },
      { icon: "🏊", text: "Swim proof design for water activities" },
      { icon: "📲", text: "Seamless smartphone notifications" },
    ],
    link: "watch-detail.html",
  },
  "nexus-ultra-2": {
    id: "nexus-ultra-2",
    name: "Nexus Watch Ultra 2",
    displayName: "Silver Standard",
    description: "49mm • Natural Titanium",
    category: "watches",
    price: 89900,
    image: "images/products/product_steel_silver_1769971174728.png",
    colors: ["#c4c4c4", "#1d1d1f"],
    features: [
      { icon: "🏔️", text: "Built for extreme adventures and endurance" },
      { icon: "📍", text: "Precision dual-frequency GPS" },
      { icon: "🔋", text: "Up to 36 hours of battery life" },
      { icon: "🌊", text: "Water resistant to 100 meters" },
      { icon: "🧭", text: "Advanced compass and waypoints" },
      { icon: "🔦", text: "Action button for quick access" },
    ],
    link: "watch-detail.html",
  },
  // Audio Products
  "nexus-buds": {
    id: "nexus-buds",
    name: "Nexus Buds",
    displayName: "Nexus Buds",
    description: "Open fit design",
    category: "audio",
    price: 12900,
    image: "images/products/nexus_buds_standard_1769974540541.png",
    colors: ["#ffffff"],
    features: [
      { icon: "🎵", text: "Incredible sound quality with custom drivers" },
      { icon: "👂", text: "Comfortable open-fit design" },
      { icon: "🔋", text: "Up to 6 hours of listening time" },
      { icon: "📱", text: "Seamless device switching" },
      { icon: "🎤", text: "Crystal clear calls with beamforming mics" },
      { icon: "💧", text: "Sweat and water resistant" },
    ],
    link: "audio.html",
  },
  "nexus-buds-pro": {
    id: "nexus-buds-pro",
    name: "Nexus Buds Pro 2",
    displayName: "Nexus Buds Pro",
    description: "Active Noise Cancellation",
    category: "audio",
    price: 24900,
    image: "images/products/nexus_buds_pro_1769974523745.png",
    colors: ["#ffffff", "#1d1d1f"],
    features: [
      { icon: "🔇", text: "Active Noise Cancellation blocks outside sounds" },
      { icon: "🔊", text: "Transparency mode to hear your surroundings" },
      { icon: "🎵", text: "Adaptive Audio adjusts to your environment" },
      { icon: "🔋", text: "Up to 6 hours with ANC, 30 hours total" },
      { icon: "🎤", text: "Voice Isolation for clearer calls" },
      { icon: "✨", text: "Personalized Spatial Audio with head tracking" },
    ],
    link: "audio.html",
  },
  "nexus-studio": {
    id: "nexus-studio",
    name: "Nexus Studio",
    displayName: "Nexus Studio",
    description: "Over-ear headphones",
    category: "audio",
    price: 54900,
    image: "images/products/nexus_studio_silver_1769974506326.png",
    colors: ["#c4c4c4", "#1d1d1f", "#0071e3"],
    features: [
      { icon: "🎧", text: "Ultimate over-ear listening experience" },
      { icon: "🔇", text: "Industry-leading Active Noise Cancellation" },
      { icon: "🎵", text: "High-fidelity audio with custom drivers" },
      { icon: "🔋", text: "Up to 20 hours of listening time" },
      { icon: "✨", text: "Spatial Audio with dynamic head tracking" },
      { icon: "🧲", text: "Premium breathable knit mesh canopy" },
    ],
    link: "audio.html",
  },
  // Accessories - Watch Straps
  "sport-band": {
    id: "sport-band",
    name: "Sport Band",
    displayName: "Sport Band",
    description: "Lightweight & durable",
    category: "accessories",
    price: 4900,
    image: "images/products/band_sport_loop_trio_1769975915434.png",
    colors: ["#4a4a4a", "#f0c929", "#6b2e6b"],
    features: [],
    link: "accessories.html",
  },
  "nexus-sport-loop": {
    id: "nexus-sport-loop",
    name: "Nexus Sport Loop",
    displayName: "Sport Loop",
    description: "Soft & breathable",
    category: "accessories",
    price: 4900,
    image: "images/products/band_sport_loop_trio_1769975915434.png",
    colors: ["#2d5a27", "#1e3a5f", "#5a1e1e"],
    features: [],
    link: "accessories.html",
  },
  "milanese-loop": {
    id: "milanese-loop",
    name: "Milanese Loop",
    displayName: "Milanese Loop",
    description: "Stainless steel mesh",
    category: "accessories",
    price: 9900,
    image: "images/products/band_milanese_loop_trio_1769975947795.png",
    colors: ["#c4c4c4", "#1d1d1f", "#d4a574"],
    features: [],
    link: "accessories.html",
  },
  "link-bracelet": {
    id: "link-bracelet",
    name: "Link Bracelet",
    displayName: "Link Bracelet",
    description: "Polished stainless steel",
    category: "accessories",
    price: 34900,
    image: "images/products/band_milanese_loop_trio_1769975947795.png",
    colors: ["#c4c4c4", "#1d1d1f"],
    features: [],
    link: "accessories.html",
  },
  "leather-link": {
    id: "leather-link",
    name: "Leather Link",
    displayName: "Leather Link",
    description: "Magnetic closure",
    category: "accessories",
    price: 14900,
    image: "images/products/band_braided_solo_watch_1769975933904.png",
    colors: ["#8B5E3C", "#1d1d1f"],
    features: [],
    link: "accessories.html",
  },
  "ocean-band": {
    id: "ocean-band",
    name: "Ocean Band",
    displayName: "Ocean Band",
    description: "For extreme water sports",
    category: "accessories",
    price: 8900,
    image: "images/products/band_sport_loop_trio_1769975915434.png",
    colors: ["#f0c929", "#8B2252"],
    features: [],
    link: "accessories.html",
  },
  "braided-solo-loop": {
    id: "braided-solo-loop",
    name: "Braided Solo Loop",
    displayName: "Braided Solo Loop",
    description: "Stretchable recycled yarn",
    category: "accessories",
    price: 9900,
    image: "images/products/band_braided_solo_watch_1769975933904.png",
    colors: ["#4a90d9", "#2d5a27", "#f0c929"],
    features: [],
    link: "accessories.html",
  },
  "sport-loop-featured": {
    id: "sport-loop-featured",
    name: "Sport Loop",
    displayName: "Sport Loop",
    description: "Hook-and-loop fastener",
    category: "accessories",
    price: 4900,
    image: "images/products/band_sport_loop_trio_1769975915434.png",
    colors: ["#4a4a4a", "#f0c929", "#6b2e6b"],
    features: [],
    link: "accessories.html",
  },
  // Accessories - Chargers
  "power-adapter-35w": {
    id: "power-adapter-35w",
    name: "35W Dual USB-C Port Power Adapter",
    displayName: "Power Adapter",
    description: "Fast charging",
    category: "accessories",
    price: 5900,
    image: "images/products/watch_charger_fast_1769975962427.png",
    colors: ["#ffffff"],
    features: [],
    link: "accessories.html",
  },
  "magnetic-charger": {
    id: "magnetic-charger",
    name: "Nexus Watch Magnetic Fast Charger",
    displayName: "Magnetic Charger",
    description: "USB-C cable",
    category: "accessories",
    price: 2900,
    image: "images/products/watch_charger_fast_1769975962427.png",
    colors: ["#ffffff"],
    features: [],
    link: "accessories.html",
  },
};

// ============ CART STATE ============
function getCart() {
  const cart = localStorage.getItem("nexusCart");
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem("nexusCart", JSON.stringify(cart));
  updateCartCount();
}

// ============ CART OPERATIONS ============
function addToCart(productId) {
  const product = PRODUCTS[productId];
  if (!product) {
    console.error("Product not found:", productId);
    return;
  }

  const cart = getCart();
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: productId,
      quantity: 1,
    });
  }

  saveCart(cart);

  // Show feedback
  showAddedToast(product.name);
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== productId);
  saveCart(cart);
  renderCart();
}

function updateQuantity(productId, delta) {
  const cart = getCart();
  const item = cart.find((item) => item.id === productId);

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
  const container = document.getElementById("cart-items-container");
  const emptyState = document.getElementById("cart-empty");
  const summarySection = document.querySelector(".cart-summary");

  if (!container) return; // Not on cart page

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    if (summarySection) summarySection.style.display = "none";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  if (summarySection) summarySection.style.display = "block";

  let html = "";
  let subtotal = 0;

  cart.forEach((cartItem) => {
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
                    <div class="item-subtotal">₹${itemTotal.toLocaleString("en-IN")}</div>
                    <button class="btn-remove" onclick="removeFromCart('${product.id}')">Remove</button>
                </div>
            </div>
        `;
  });

  container.innerHTML = html;

  // Update summary
  const summarySubtotal = document.getElementById("summary-subtotal");
  const summaryTotal = document.getElementById("summary-total");

  if (summarySubtotal)
    summarySubtotal.textContent = "₹" + subtotal.toLocaleString("en-IN");
  if (summaryTotal)
    summaryTotal.textContent = "₹" + subtotal.toLocaleString("en-IN");
}

// ============ NAV CART COUNT ============
function updateCartCount() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Update all cart links in nav
  const cartLinks = document.querySelectorAll('a[href="cart.html"]');
  cartLinks.forEach((link) => {
    if (link.textContent.includes("Cart")) {
      link.textContent = `Cart (${totalItems})`;
    }
  });
}

// ============ TOAST NOTIFICATION ============
function showAddedToast(productName) {
  // Remove existing toast
  const existing = document.querySelector(".cart-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "cart-toast";
  toast.innerHTML = `✓ Added <strong>${productName}</strong> to your bag`;
  document.body.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add("show"), 10);

  // Remove after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============ HERO CAROUSEL SYSTEM ============
let currentSlide = 0;
let heroAutoRotateInterval = null;
const HERO_ROTATE_MS = 5000; // 5 seconds

function initHeroCarousel() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");

  if (slides.length === 0) return; // Not on landing page

  // Set up dot click handlers
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index);
      resetAutoRotate();
    });
  });

  // Start auto-rotation
  startAutoRotate();
}

function goToSlide(index) {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");
  const slidesContainer = document.getElementById("heroSlides");

  if (!slidesContainer || slides.length === 0) return;

  // Update current slide index
  currentSlide = index;

  // Update slides
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  // Update dots
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  // Animate slide container
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  const slides = document.querySelectorAll(".hero-slide");
  const nextIndex = (currentSlide + 1) % slides.length;
  goToSlide(nextIndex);
}

function startAutoRotate() {
  if (heroAutoRotateInterval) return;
  heroAutoRotateInterval = setInterval(nextSlide, HERO_ROTATE_MS);
}

function stopAutoRotate() {
  if (heroAutoRotateInterval) {
    clearInterval(heroAutoRotateInterval);
    heroAutoRotateInterval = null;
  }
}

function resetAutoRotate() {
  stopAutoRotate();
  startAutoRotate();
}

// ============ PRODUCT MODAL SYSTEM ============
let currentModalCategory = "watches";

function openProductModal(productId) {
  const product = PRODUCTS[productId];
  if (!product) {
    console.error("Product not found:", productId);
    return;
  }

  const modal = document.getElementById("productModal");
  if (!modal) return;

  currentModalCategory = product.category;

  // Generate tabs for same category products
  generateModalTabs(product.category, productId);

  // Populate modal with product data
  populateModalContent(product);

  // Show modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function generateModalTabs(category, activeProductId) {
  const tabsContainer = document.getElementById("modalTabs");
  if (!tabsContainer) return;

  // Get all products in the same category
  const categoryProducts = Object.values(PRODUCTS).filter(
    (p) => p.category === category,
  );

  let tabsHtml = "";
  categoryProducts.forEach((product) => {
    const isActive = product.id === activeProductId ? "active" : "";
    tabsHtml += `
            <button class="modal-tab ${isActive}" 
                    onclick="switchModalProduct('${product.id}')"
                    data-product="${product.id}">
                ${product.displayName || product.name}
            </button>
        `;
  });

  tabsContainer.innerHTML = tabsHtml;
}

function switchModalProduct(productId) {
  const product = PRODUCTS[productId];
  if (!product) return;

  // Update tab states
  const tabs = document.querySelectorAll(".modal-tab");
  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.product === productId);
  });

  // Populate with new product data
  populateModalContent(product);
}

function populateModalContent(product) {
  // Update image
  const modalImage = document.getElementById("modalProductImage");
  if (modalImage) {
    modalImage.src = product.image;
    modalImage.alt = product.name;
  }

  // Update product name
  const modalName = document.getElementById("modalProductName");
  if (modalName) {
    modalName.textContent = product.name;
  }

  // Update pricing
  const modalPricing = document.getElementById("modalProductPricing");
  if (modalPricing) {
    modalPricing.innerHTML = `From ₹${product.price.toLocaleString("en-IN")}/mo. with instant<br>cashback and No Cost EMI or<br>₹${product.price.toLocaleString("en-IN")}`;
  }

  // Update buy button
  const buyBtn = document.getElementById("modalBuyBtn");
  if (buyBtn) {
    buyBtn.onclick = () => {
      addToCart(product.id);
      closeProductModal();
    };
  }

  // Update features
  const featuresList = document.getElementById("modalFeatures");
  if (featuresList && product.features) {
    let featuresHtml = "";
    product.features.forEach((feature) => {
      featuresHtml += `
                <li>
                    <span class="modal-feature-icon">${feature.icon}</span>
                    <span>${feature.text}</span>
                </li>
            `;
    });
    featuresList.innerHTML = featuresHtml;
  }

  // Update swatches
  const swatchesContainer = document.getElementById("modalSwatches");
  if (swatchesContainer && product.colors) {
    let swatchesHtml = "";
    product.colors.forEach((color) => {
      const borderStyle = color === "#ffffff" ? "border: 1px solid #ddd;" : "";
      swatchesHtml += `<span class="modal-swatch" style="background: ${color}; ${borderStyle}"></span>`;
    });
    swatchesContainer.innerHTML = swatchesHtml;
  }

  // Update finishes text
  const finishesText = document.getElementById("modalFinishes");
  if (finishesText && product.colors) {
    finishesText.textContent = `Available in ${product.colors.length} finish${product.colors.length > 1 ? "es" : ""}`;
  }

  // Update explore link
  const exploreLink = document.getElementById("modalExploreLink");
  if (exploreLink) {
    exploreLink.href = product.link || "#";
    exploreLink.textContent = `Explore ${product.displayName || product.name} further >`;
  }
}

// ============ INITIALIZATION ============
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  // Navigation Scroll Effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  });

  // Update cart count on all pages
  updateCartCount();

  // Render cart if on cart page
  renderCart();

  // Initialize hero carousel if on landing page
  initHeroCarousel();

  // Modal close on overlay click
  const modalOverlay = document.getElementById("productModal");
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        closeProductModal();
      }
    });
  }

  // ESC key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
    }
  });

  console.log("NEXUS Store Initialized with Landing Page Features");
});
