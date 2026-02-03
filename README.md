<p align="center">
  <h1 align="center">🌟 NEXUS Wearables</h1>
  <p align="center"><strong>Premium E-Commerce Website for Smartwatches & Audio Products</strong></p>
  <p align="center">
    <em>An Apple-inspired, multi-page static website built with HTML, CSS & JavaScript</em>
  </p>
</p>

---

## 📖 Table of Contents

- [About The Project](#-about-the-project)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Pages Overview](#-pages-overview)
- [Technical Details](#-technical-details)
- [Design System](#-design-system)
- [JavaScript Functionality](#-javascript-functionality)
- [Getting Started](#-getting-started)
- [Browser Compatibility](#-browser-compatibility)
- [Credits](#-credits)

---

## 🎯 About The Project

**NEXUS Wearables** is a premium e-commerce website designed to showcase smartwatches and audio products. The project demonstrates modern web development practices with a focus on:

- 🎨 **Apple-inspired aesthetics** with clean, minimal design
- 📱 **Responsive layouts** that adapt to all screen sizes
- 🛒 **Functional shopping cart** with localStorage persistence
- ⚡ **Smooth animations** and micro-interactions
- 🏗️ **Modular CSS architecture** with custom properties

### Built With

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure and content |
| **CSS3** | Styling, animations, and responsive design |
| **Vanilla JavaScript** | Cart functionality and interactivity |
| **Google Fonts (Inter)** | Premium typography |

---

## 🌐 Live Demo

Open `index.html` in any modern web browser to view the website locally.

---

## ✨ Features

### User Experience
- ✅ Mega menu navigation with hover dropdowns
- ✅ Product comparison grids
- ✅ Interactive product cards with hover effects
- ✅ Dynamic product detail pages with URL parameters
- ✅ Fully functional shopping cart with quantity controls
- ✅ Toast notifications for cart actions
- ✅ Search functionality UI on support page
- ✅ Smooth scroll behavior

### Design
- ✅ Apple-style glassmorphism navigation
- ✅ Bento grid card layouts
- ✅ Lifestyle poster sections
- ✅ Color swatch selectors
- ✅ Consistent typography scale
- ✅ Responsive breakpoints at 900px and 600px

### Technical
- ✅ CSS custom properties for theming
- ✅ CSS Grid and Flexbox layouts
- ✅ LocalStorage for cart persistence
- ✅ No external dependencies (except Google Fonts)

---

## 📁 Project Structure

```
HTML_CSS_FINAL_PROJECT/
│
├── index.html              # Homepage with hero and product showcase
├── watches.html            # Watch catalog comparison page
├── accessories.html        # Watch straps and accessories
├── audio.html              # Audio products (headphones, earbuds)
├── cart.html               # Shopping cart page
├── support.html            # Customer support portal
├── watch-detail.html       # Dynamic product detail page
│
├── products/
│   └── index.html          # Alternate landing page (legacy)
│
├── css/
│   ├── reset.css           # Browser reset styles
│   ├── variables.css       # CSS custom properties (design tokens)
│   ├── style.css           # Main stylesheet (1378 lines)
│   └── style2.css          # Secondary stylesheet for audio/accessories
│
├── js/
│   └── app.js              # Cart system and interactivity
│
└── images/
    ├── hero/               # Lifestyle and hero images
    ├── icons/              # Icon assets
    └── products/           # Product photography
```

---

## 📄 Pages Overview

### 🏠 Homepage (`index.html`)

| Section | Description |
|---------|-------------|
| **Hero Section** | Full-width hero featuring NEXUS Series 7 with CTA buttons |
| **Product Showcase** | Bento-style cards displaying Black Beast, Silver Standard, Leather Gold watches |
| **Lifestyle Posters** | Two-column grid with yoga and fitness lifestyle imagery |
| **Mega Menu Navigation** | Fixed navbar with dropdown menus for Watches and Audio |

**Key CSS Classes:** `.apple-hero-text`, `.bento-card-flex`, `.card-vertical`, `.poster-grid`

---

### ⌚ Watch Catalog (`watches.html`)

| Section | Description |
|---------|-------------|
| **Page Header** | Large "Nexus Watch" title |
| **Comparison Grid** | 3-column grid comparing Series 10, SE 3, and Ultra 2 |
| **Product Cards** | Image, color swatches, name, slogan, price, and CTA buttons |

**Products Featured:**
- **Nexus Watch Series 10** – ₹46,900 – The ultimate health watch
- **Nexus Watch SE 3** – ₹25,900 – Essential features at great value
- **Nexus Watch Ultra 2** – ₹89,900 – Sports and adventure watch

**Key CSS Classes:** `.watch-comparison-grid`, `.watch-card`, `.watch-swatches`, `.tag-new`

---

### 🎒 Accessories (`accessories.html`)

| Section | Description |
|---------|-------------|
| **Banner** | "Just your style" promotional banner with rotated band image |
| **Featured Section** | 2-column grid showcasing Sport Loop and Braided Solo Loop |
| **Strap Collection** | 3-column grid with Sport Band, Nike Sport Loop, Milanese Loop |
| **Essentials** | Chargers and cross-sell products (Nexus Buds Pro) |

**Key CSS Classes:** `.bento-card-light`, `.bg-apple-gray`

---

### 🎧 Audio Products (`audio.html`)

| Section | Description |
|---------|-------------|
| **Hero Section** | Nexus Studio headphones showcase (₹54,900) |
| **Sub-Hero** | Nexus Buds Pro feature section |
| **Comparison Grid** | "Which is right for you?" – 3-product comparison |
| **Feature Cards** | Active Noise Cancellation bento cards |

**Products Featured:**
- **Nexus Buds** – ₹12,900 – Open fit, incredible sound
- **Nexus Buds Pro 2** – ₹24,900 – ANC and Transparency mode
- **Nexus Studio** – ₹54,900 – Ultimate over-ear experience

**Key CSS Classes:** `.apple-compare-grid`, `.apple-compare-item`, `.compare-img`

---

### 🛒 Shopping Cart (`cart.html`)

| Section | Description |
|---------|-------------|
| **Cart Items** | Dynamic list of added products with images and controls |
| **Quantity Controls** | Increment/decrement buttons (−/+) |
| **Order Summary** | Subtotal, shipping (FREE), tax (included), total |
| **Empty State** | Shown when cart is empty with "Shop Now" CTA |

**Key CSS Classes:** `.cart-layout`, `.cart-item`, `.cart-summary`, `.qty-controls`

---

### 🆘 Support Page (`support.html`)

| Section | Description |
|---------|-------------|
| **Hero Section** | "NEXUS Support" title with search bar |
| **Products Grid** | Quick links to Watch, Audio, and Accessories support |
| **Quick Links** | 6-card grid (Reset Password, Track Order, Check Coverage, Repairs, Billing, Setup Guide) |
| **Contact Section** | Dark card with "Chat with us" and "Call support" CTAs |

**Key CSS Classes:** `.support-hero-section`, `.support-search`, `.support-quick-grid`, `.support-contact-card`

---

### 📱 Product Detail (`watch-detail.html`)

| Section | Description |
|---------|-------------|
| **Product Hero** | 2-column layout with large image and product info |
| **Key Features** | 4-column grid of feature cards |
| **Tech Specs** | Table with display, chip, sensors, connectivity, etc. |

**Dynamic Content:** Page reads URL query parameter `?id=nexus-series-10` to display correct product.

**Product IDs:** `nexus-series-10`, `nexus-se-3`, `nexus-ultra-2`

**Key CSS Classes:** `.product-detail-hero`, `.product-detail-container`, `.features-grid`, `.specs-table`

---

## 🛠️ Technical Details

### CSS Architecture

#### `reset.css` (43 lines)
Normalizes browser defaults:
- Box-sizing border-box
- Remove margins/padding
- Smooth scrolling
- Antialiased font rendering

#### `variables.css` (67 lines)
Design tokens and CSS custom properties:

```css
/* Typography */
--font-main: 'Inter', -apple-system, sans-serif;
--text-display: 56px;
--text-h1: 40px;
--text-body: 17px;

/* Colors */
--color-bg-body: #fffffc;
--color-accent: #0071E3;  /* Apple Blue */
--color-text-primary: #1D1D1F;

/* Spacing (8px grid) */
--space-1: 8px;
--space-4: 32px;

/* Layout */
--container-width: 1200px;
--nav-height: 48px;
```

#### `style.css` (1378 lines)
Main stylesheet containing:
- Base styles and typography (lines 1-100)
- Button components (lines 49-91)
- Navigation with mega menu (lines 93-228)
- Apple-style sections (lines 229-478)
- Support page styles (lines 496-756)
- Watch comparison grid (lines 757-916)
- Cart page styles (lines 918-1157)
- Product detail page (lines 1159-1378)
- Responsive breakpoints

#### `style2.css` (459 lines)
Secondary stylesheet for `audio.html` and `accessories.html`:
- Simplified navigation styles
- Audio-specific sections
- Bento card variations

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Apple Blue | `#0071E3` | Primary accent, buttons, links |
| Apple Black | `#1D1D1F` | Headings, primary text |
| Gray Text | `#86868B` | Secondary text, captions |
| Light Gray BG | `#F5F5F7` | Cards, sections |
| Off-White | `#FFFFFC` | Page background |
| Orange Accent | `#BF4800` | "New" tags, warnings |
| Green | `#1D7D1D` | Free shipping, success |

### Typography Scale

| Size | Variable | Usage |
|------|----------|-------|
| 72px | `.apple-hero-text` | Hero headlines |
| 56px | `--text-display` | Section headers |
| 48px | Page titles | `.cart-page-title`, `.product-title` |
| 32px | `--text-h2` | Section headings |
| 24px | `--text-h3` | Card headlines |
| 17px | `--text-body` | Body text |
| 14px | `--text-small` | UI elements |
| 12px | `--text-caption` | Captions, tags |

### Spacing System

Based on 8px grid: `8px`, `16px`, `24px`, `32px`, `48px`

### Border Radius Scale

| Usage | Radius |
|-------|--------|
| Cards | `28px` |
| Product images | `28px` |
| Buttons | `999px` (pill) |
| Feature cards | `18px` |
| Search input | `12px` |

---

## ⚙️ JavaScript Functionality

### `app.js` (209 lines)

#### Product Catalog
```javascript
const PRODUCTS = {
    'nexus-series-10': { name, description, price, image },
    'nexus-se-3': { ... },
    'nexus-ultra-2': { ... }
};
```

#### Cart Functions

| Function | Description |
|----------|-------------|
| `getCart()` | Retrieves cart from localStorage |
| `saveCart(cart)` | Persists cart to localStorage |
| `addToCart(productId)` | Adds item or increments quantity |
| `removeFromCart(productId)` | Removes item from cart |
| `updateQuantity(productId, delta)` | Adjusts quantity (max: 10) |
| `renderCart()` | Renders cart UI on cart.html |
| `updateCartCount()` | Updates navbar cart badge |
| `showAddedToast(productName)` | Shows confirmation toast |

#### Event Listeners
- **Scroll**: Adds `.scrolled` class to navbar
- **DOMContentLoaded**: Initializes cart count and render

#### LocalStorage Key
`nexusCart` – stores array of `{ id, quantity }` objects

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required

### Installation

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/Aaryan0612/HTML-CSS-mini-project.git
   ```

2. **Navigate to the project folder**
   ```bash
   cd HTML_CSS_FINAL_PROJECT
   ```

3. **Open in browser**
   ```bash
   open index.html
   # or double-click index.html
   ```

### Development
To modify styles or scripts, simply edit the files and refresh the browser. No compilation needed.

---

## 🌐 Browser Compatibility

| Browser | Supported |
|---------|-----------|
| Chrome 90+ | ✅ |
| Firefox 88+ | ✅ |
| Safari 14+ | ✅ |
| Edge 90+ | ✅ |

**Required Features:**
- CSS Grid & Flexbox
- CSS Custom Properties
- LocalStorage API
- ES6+ JavaScript

---

## 📚 Credits

- **Design Inspiration:** Apple.com
- **Typography:** [Inter](https://fonts.google.com/specimen/Inter) by Rasmus Andersson
- **Icons:** Emoji-based for simplicity
- **Images:** Project-specific product photography

---

## 📝 License

This project is for **academic purposes only**.

---

<p align="center">
  <strong>© 2026 NEXUS Wearables. Designed for Academic Excellence.</strong>
</p>
