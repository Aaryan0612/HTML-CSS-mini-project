# NEXUS Wearables - Visual Style Guide

## Quick Reference for Design Implementation

---

## 🎨 Color Palette

### Primary Colors
```css
--deep-space-black: #0a0a0a;
--electric-cyan: #00d4ff;
--titanium-gray: #2a2a2a;
--pure-white: #ffffff;
--soft-white: #f5f5f5;
```

### Accent Colors
```css
--energy-orange: #ff6b35;
--success-green: #00ff88;
--warning-amber: #ffaa00;
--premium-gold: #d4af37;
```

### Usage Guidelines

**Backgrounds:**
- Hero Section: Deep Space Black (#0a0a0a)
- Product Cards: Titanium Gray (#2a2a2a)
- Alternate Sections: Soft White (#f5f5f5)

**Text:**
- Primary Headings: Pure White (#ffffff) on dark / Deep Space Black (#0a0a0a) on light
- Body Text: rgba(255, 255, 255, 0.85) on dark / rgba(10, 10, 10, 0.85) on light
- Muted Text: rgba(255, 255, 255, 0.6) on dark

**Accents:**
- Primary CTAs: Electric Cyan (#00d4ff)
- Secondary CTAs: Energy Orange (#ff6b35)
- Success States: Success Green (#00ff88)
- Badges: Premium Gold (#d4af37)

---

## 📝 Typography System

### Font Imports
```css
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap');
```

### Font Families
```css
--font-primary: 'Orbitron', sans-serif;
--font-secondary: 'IBM Plex Sans', sans-serif;
```

### Type Scale
```css
/* Desktop */
--text-hero: 4.5rem;        /* 72px */
--text-h1: 3rem;            /* 48px */
--text-h2: 2.25rem;         /* 36px */
--text-h3: 1.75rem;         /* 28px */
--text-body: 1rem;          /* 16px */
--text-small: 0.875rem;     /* 14px */
--text-micro: 0.75rem;      /* 12px */

/* Mobile - scale down by ~40% */
--text-hero-mobile: 2.5rem;  /* 40px */
--text-h1-mobile: 2rem;      /* 32px */
--text-h2-mobile: 1.5rem;    /* 24px */
```

### Font Weights
```css
--weight-light: 300;
--weight-regular: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 700;
--weight-black: 900;
```

### Usage
- **Headings (h1-h6):** Orbitron, Bold (700) or Black (900)
- **Navigation:** Orbitron, Medium (500)
- **Body Text:** IBM Plex Sans, Regular (400)
- **Product Descriptions:** IBM Plex Sans, Light (300)
- **Buttons:** Orbitron, Semibold (600)

---

## 📐 Spacing System

### Base Unit: 8px

```css
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 1.5rem;   /* 24px */
--space-lg: 2rem;     /* 32px */
--space-xl: 3rem;     /* 48px */
--space-2xl: 4rem;    /* 64px */
--space-3xl: 6rem;    /* 96px */
```

### Container Widths
```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;
```

### Padding Pattern
- **Sections:** 4rem (64px) top/bottom, 2rem (32px) left/right
- **Cards:** 2rem (32px) all sides
- **Buttons:** 1rem (16px) vertical, 2rem (32px) horizontal

---

## 🔲 Border Radius

```css
--radius-sm: 4px;     /* Small elements */
--radius-md: 8px;     /* Cards, inputs */
--radius-lg: 12px;    /* Large cards */
--radius-xl: 16px;    /* Hero elements */
--radius-full: 9999px; /* Circular buttons */
```

---

## 🌓 Shadows

### Elevation System

```css
/* Level 1 - Subtle */
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);

/* Level 2 - Card */
--shadow-md: 0 4px 20px rgba(0, 0, 0, 0.15);

/* Level 3 - Elevated */
--shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.25);

/* Level 4 - Floating */
--shadow-xl: 0 20px 60px rgba(0, 0, 0, 0.35);

/* Glow Effects */
--glow-cyan: 0 0 30px rgba(0, 212, 255, 0.6);
--glow-orange: 0 0 30px rgba(255, 107, 53, 0.6);
```

### Usage
- **Cards at Rest:** shadow-md
- **Cards on Hover:** shadow-lg + glow-cyan
- **Buttons:** shadow-sm, shadow-md on hover
- **Navigation:** shadow-sm
- **Hero Elements:** shadow-xl

---

## 🎭 Animation Timings

### Duration
```css
--duration-fast: 0.15s;
--duration-base: 0.3s;
--duration-slow: 0.5s;
--duration-slower: 0.8s;
```

### Easing Functions
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Common Animations

**Fade In:**
```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

**Slide Up:**
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Scale In:**
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

**Float:**
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
```

---

## 🖼️ Component Patterns

### Button Styles

**Primary Button:**
```css
.btn-primary {
  background: var(--electric-cyan);
  color: var(--deep-space-black);
  padding: 1rem 2rem;
  border-radius: var(--radius-lg);
  font-family: var(--font-primary);
  font-weight: var(--weight-semibold);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #00b8e6;
  box-shadow: var(--glow-cyan);
  transform: translateY(-2px);
}
```

**Secondary Button:**
```css
.btn-secondary {
  background: transparent;
  color: var(--pure-white);
  border: 2px solid var(--electric-cyan);
  padding: 1rem 2rem;
  border-radius: var(--radius-lg);
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: var(--electric-cyan);
  color: var(--deep-space-black);
  transform: translateY(-2px);
}
```

### Card Pattern

```css
.card {
  background: var(--titanium-gray);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-md);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-xl), var(--glow-cyan);
}
```

### Input Style

```css
.input {
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(0, 212, 255, 0.3);
  color: var(--pure-white);
  padding: 1rem;
  border-radius: var(--radius-md);
  font-family: var(--font-secondary);
  transition: all 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: var(--electric-cyan);
  box-shadow: 0 0 0 4px rgba(0, 212, 255, 0.1);
}
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */

/* Extra Small - Default (0-599px) */
/* Base styles go here */

/* Small Tablets (600px+) */
@media (min-width: 600px) {
  /* Styles */
}

/* Tablets & Small Desktops (900px+) */
@media (min-width: 900px) {
  /* Styles */
}

/* Desktops (1200px+) */
@media (min-width: 1200px) {
  /* Styles */
}

/* Large Desktops (1536px+) */
@media (min-width: 1536px) {
  /* Styles */
}
```

### Grid Columns by Breakpoint
- Mobile (0-599px): 1 column
- Tablet (600-899px): 2 columns
- Desktop (900px+): 3 columns
- Large (1200px+): 4 columns (for features)

---

## 🎯 Hover States

### Universal Hover Pattern
```css
.interactive-element {
  transition: all 0.3s ease;
  cursor: pointer;
}

.interactive-element:hover {
  transform: translateY(-2px);
  box-shadow: larger-shadow;
}
```

### Specific Elements

**Links:**
```css
a {
  position: relative;
  text-decoration: none;
  color: var(--electric-cyan);
}

a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--electric-cyan);
  transition: width 0.3s ease;
}

a:hover::after {
  width: 100%;
}
```

**Images:**
```css
img {
  transition: transform 0.4s ease;
}

img:hover {
  transform: scale(1.05);
}
```

---

## 🌈 Gradient Recipes

### Hero Background
```css
background: linear-gradient(
  135deg,
  #0a0a0a 0%,
  #1a1a2e 50%,
  #0f3460 100%
);
```

### Button Gradient
```css
background: linear-gradient(
  135deg,
  #00d4ff 0%,
  #0099cc 100%
);
```

### Card Hover Overlay
```css
background: linear-gradient(
  135deg,
  rgba(0, 212, 255, 0.1) 0%,
  rgba(255, 107, 53, 0.1) 100%
);
```

### Text Gradient
```css
background: linear-gradient(
  90deg,
  #00d4ff 0%,
  #ff6b35 100%
);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

---

## 🎬 Page Load Animation Sequence

### Timing Chart
```
0.0s  → Navigation slides down
0.2s  → Hero title fades in
0.4s  → Hero subtitle fades in
0.6s  → Hero buttons scale in
0.8s  → Hero image appears
1.0s  → Floating badge 1 appears
1.2s  → Floating badge 2 appears
1.4s  → Scroll indicator fades in
```

### Implementation
```css
.nav { animation: slideDown 0.6s ease 0s both; }
.hero-title { animation: fadeInUp 0.6s ease 0.2s both; }
.hero-subtitle { animation: fadeInUp 0.6s ease 0.4s both; }
.hero-buttons { animation: scaleIn 0.6s ease 0.6s both; }
.hero-image { animation: fadeIn 0.8s ease 0.8s both; }
.badge-1 { animation: floatIn 0.6s ease 1.0s both; }
.badge-2 { animation: floatIn 0.6s ease 1.2s both; }
```

---

## ✨ Special Effects

### Glass Morphism (Navigation)
```css
.glass {
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Neon Glow Text
```css
.neon-text {
  color: var(--electric-cyan);
  text-shadow: 
    0 0 10px rgba(0, 212, 255, 0.8),
    0 0 20px rgba(0, 212, 255, 0.6),
    0 0 30px rgba(0, 212, 255, 0.4);
}
```

### Gradient Border
```css
.gradient-border {
  position: relative;
  background: var(--titanium-gray);
  border-radius: var(--radius-lg);
}

.gradient-border::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, #00d4ff, #ff6b35);
  border-radius: var(--radius-lg);
  z-index: -1;
}
```

### Ripple Effect (on click)
```css
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

.ripple {
  position: relative;
  overflow: hidden;
}

.ripple::after {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(0, 212, 255, 0.5);
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 0.6s ease-out;
}
```

---

## 🔍 Focus States (Accessibility)

```css
*:focus {
  outline: 3px solid var(--electric-cyan);
  outline-offset: 2px;
}

*:focus:not(:focus-visible) {
  outline: none;
}

*:focus-visible {
  outline: 3px solid var(--electric-cyan);
  outline-offset: 2px;
}
```

---

## 📊 Data Visualization Colors

For charts, progress bars, and metrics:

```css
--data-blue: #00d4ff;
--data-green: #00ff88;
--data-orange: #ff6b35;
--data-purple: #b084ff;
--data-pink: #ff6b9d;
--data-yellow: #ffaa00;
```

---

## 🎨 Design Principles Summary

1. **Bold Typography** - Make headings huge and impactful
2. **Generous Spacing** - Let elements breathe
3. **Smooth Animations** - Everything should feel fluid
4. **Consistent Shadows** - Define depth hierarchy
5. **Vibrant Accents** - Use electric cyan and orange strategically
6. **Dark Dominant** - Dark theme as primary, light as accent
7. **Hover Delight** - Every interactive element should respond
8. **Mobile First** - Design for mobile, enhance for desktop

---

## 🚀 Quick Start Code Template

```css
:root {
  /* Colors */
  --deep-space-black: #0a0a0a;
  --electric-cyan: #00d4ff;
  --titanium-gray: #2a2a2a;
  --pure-white: #ffffff;
  --energy-orange: #ff6b35;
  
  /* Fonts */
  --font-primary: 'Orbitron', sans-serif;
  --font-secondary: 'IBM Plex Sans', sans-serif;
  
  /* Spacing */
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  
  /* Shadows */
  --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.15);
  --glow-cyan: 0 0 30px rgba(0, 212, 255, 0.6);
  
  /* Animation */
  --duration-base: 0.3s;
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-secondary);
  background: var(--deep-space-black);
  color: var(--pure-white);
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-primary);
  font-weight: 700;
}
```

---

This style guide should be your go-to reference while building the website. Keep it open in a separate tab! 🎨✨
