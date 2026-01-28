# Product Requirements Document (PRD)
## Wearable Tech Website - IoT Domain

**Project Name:** NEXUS Wearables  
**Reference:** Garmin.com  
**Target Audience:** Tech-savvy consumers, fitness enthusiasts, IoT professionals  
**Deadline:** February 2, 2026  
**Team:** B.Tech CSE Students  

---

## 1. Executive Summary

Create a premium wearable technology website that showcases IoT-enabled smartwatches and fitness trackers. The website will demonstrate mastery of HTML5 and CSS3 concepts while delivering a modern, engaging user experience that rivals industry leaders like Garmin.

**Unique Value Proposition:**
- Premium, tech-forward design aesthetic
- Interactive 3D product showcases
- Advanced CSS animations and transitions
- Full responsive design (mobile-first approach)
- Innovative UI/UX elements beyond standard e-commerce sites

---

## 2. Design Philosophy

### 2.1 Visual Identity

**Brand Concept:** "Future-Tech Meets Premium Lifestyle"
- **Tone:** Sophisticated, cutting-edge, trustworthy, aspirational
- **Style Direction:** Tech-luxury hybrid (think Apple meets Garmin meets futuristic UI)

### 2.2 Color Scheme

**Primary Palette:**
```
- Deep Space Black: #0a0a0a (backgrounds, headers)
- Electric Cyan: #00d4ff (primary actions, highlights)
- Titanium Gray: #2a2a2a (cards, secondary backgrounds)
- Pure White: #ffffff (text on dark backgrounds)
- Soft White: #f5f5f5 (light backgrounds)
```

**Accent Colors:**
```
- Energy Orange: #ff6b35 (CTAs, important badges)
- Success Green: #00ff88 (health metrics, positive indicators)
- Warning Amber: #ffaa00 (notifications, alerts)
- Premium Gold: #d4af37 (premium product badges)
```

**Gradient Combinations:**
```
- Hero Gradient: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0f3460 100%)
- Card Hover: linear-gradient(135deg, #00d4ff22 0%, #ff6b3522 100%)
- Button Glow: radial-gradient(circle, #00d4ff 0%, #0099cc 100%)
```

### 2.3 Typography

**Font Families:**

**Primary (Headings & Tech Elements):**
- **Orbitron** (Google Fonts) - Futuristic, geometric, tech-forward
  - Weights: 400, 500, 700, 900
  - Usage: Main headings, navigation, product names, tech specs

**Secondary (Body Text):**
- **IBM Plex Sans** (Google Fonts) - Clean, readable, modern
  - Weights: 300, 400, 500, 600
  - Usage: Body text, descriptions, subheadings

**Font Sizing Scale:**
```css
- Hero Title: 4.5rem (72px) - Desktop, 2.5rem (40px) - Mobile
- Section Headings: 3rem (48px) - Desktop, 2rem (32px) - Mobile
- Product Names: 1.75rem (28px)
- Body Text: 1rem (16px)
- Small Text: 0.875rem (14px)
- Micro Text: 0.75rem (12px)
```

**Line Heights:**
```css
- Headings: 1.2
- Body Text: 1.6
- Product Descriptions: 1.7
```

---

## 3. Website Structure

### 3.1 Site Map

```
├── Home (Landing Page)
│   ├── Hero Section
│   ├── Featured Products
│   ├── Technology Showcase
│   ├── Features Grid
│   └── Newsletter/CTA
│
├── Products Section
│   ├── Product Grid
│   ├── Filter/Sort Options
│   └── Product Cards (Interactive)
│
├── Technology Section
│   ├── IoT Features
│   ├── Sensor Technology
│   └── Connectivity Options
│
├── Features Section
│   ├── Health Monitoring
│   ├── Fitness Tracking
│   ├── Smart Features
│   └── Battery & Durability
│
└── Community/Footer
    ├── Social Proof
    ├── Newsletter Signup
    └── Footer Navigation
```

### 3.2 Page Sections Breakdown

#### **Section 1: Navigation Bar**
- Sticky/Fixed navigation
- Logo on left (custom designed)
- Main menu items (center/right)
- Search icon and cart icon
- Smooth scroll to sections
- Hamburger menu for mobile
- Glass-morphism effect on scroll

#### **Section 2: Hero Section**
- Full viewport height (100vh)
- Animated background (gradient mesh or particles)
- Large hero heading with text animation
- Subheading with fade-in effect
- Dual CTAs (primary and secondary)
- Hero product image (3D-styled watch)
- Floating stat cards (animated entrance)
- Scroll indicator at bottom

#### **Section 3: Products Grid**
- 3-column grid (desktop), 1-column (mobile)
- Product cards with:
  - Custom CSS-drawn watch illustrations
  - Hover effects (3D transform, glow)
  - Product badge (NEW, BESTSELLER, etc.)
  - Product name and description
  - Spec tags
  - Price and "Add to Cart" button
- Filter/sort bar above grid
- Card flip animation on hover (optional advanced feature)

#### **Section 4: Technology Showcase**
- Split layout (image + text)
- Animated icons for IoT features
- Feature list with custom checkmarks
- Background pattern or geometric shapes
- Hover effects on feature items
- Responsive stack on mobile

#### **Section 5: Features Grid**
- 4-column grid (2 on tablet, 1 on mobile)
- Icon + Title + Description format
- Custom SVG icons or CSS shapes
- Hover animations (scale, glow)
- Staggered entrance animation on scroll

#### **Section 6: Video/Interactive Section**
- Embedded video or animated infographic
- Play button with custom styling
- Modal overlay for video playback
- Alternative: Interactive 360° product view

#### **Section 7: Testimonials/Social Proof**
- Carousel/slider (CSS-only if possible)
- User avatars (CSS shapes)
- Star ratings
- Quote styling with custom quotation marks

#### **Section 8: Newsletter/CTA**
- Eye-catching background
- Email input with custom styling
- Animated submit button
- Privacy assurance text

#### **Section 9: Footer**
- Multi-column layout
- Quick links
- Social media icons
- Contact information
- Copyright notice
- Back-to-top button (smooth scroll)

---

## 4. HTML Concepts to Implement

### 4.1 Semantic HTML5 Elements
- ✅ `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- ✅ `<figure>` and `<figcaption>` for product images
- ✅ `<details>` and `<summary>` for FAQ or specifications
- ✅ Proper heading hierarchy (h1 → h6)

### 4.2 Forms
- ✅ Newsletter signup form
- ✅ Search input with custom styling
- ✅ Input types: email, search, text
- ✅ Placeholder text
- ✅ Required attributes
- ✅ Custom form validation styling

### 4.3 Lists
- ✅ Unordered lists for navigation
- ✅ Ordered lists for feature rankings
- ✅ Definition lists for product specifications

### 4.4 Media Elements
- ✅ Images with alt text (accessibility)
- ✅ `<video>` element for product demos
- ✅ Responsive images using srcset (bonus)
- ✅ SVG icons embedded inline

### 4.5 Tables
- ✅ Product comparison table
- ✅ Specifications table
- ✅ Styled with CSS for modern look

### 4.6 Meta Tags & SEO
- ✅ Proper DOCTYPE declaration
- ✅ Meta charset, viewport
- ✅ Meta description
- ✅ Open Graph tags (bonus)
- ✅ Favicon link

---

## 5. CSS Concepts to Implement

### 5.1 Layout Techniques

**CSS Grid:**
- ✅ Product grid layout
- ✅ Features section grid
- ✅ Footer multi-column layout
- ✅ Complex asymmetric layouts

**Flexbox:**
- ✅ Navigation bar
- ✅ Hero content alignment
- ✅ Product card internal layout
- ✅ Center elements vertically and horizontally

**CSS Positioning:**
- ✅ Fixed/sticky navigation
- ✅ Absolute positioning for badges
- ✅ Relative positioning for layering
- ✅ Floating badges on hero image

### 5.2 Advanced Selectors
- ✅ Pseudo-classes: `:hover`, `:focus`, `:active`, `:nth-child()`, `:first-child`, `:last-child`
- ✅ Pseudo-elements: `::before`, `::after` for decorative elements
- ✅ Attribute selectors: `[class*="btn"]`
- ✅ Combinators: descendant, child, sibling

### 5.3 Responsive Design

**Mobile-First Approach:**
```css
/* Base styles: Mobile (0-599px) */

@media (min-width: 600px) {
  /* Tablet styles */
}

@media (min-width: 900px) {
  /* Desktop styles */
}

@media (min-width: 1200px) {
  /* Large desktop styles */
}
```

**Breakpoints:**
- Mobile: 0-599px
- Tablet: 600-899px
- Desktop: 900-1199px
- Large Desktop: 1200px+

**Responsive Techniques:**
- ✅ Fluid typography (`clamp()`, `calc()`)
- ✅ Flexible images (max-width: 100%)
- ✅ CSS Grid auto-fit/auto-fill
- ✅ Container queries (bonus if time permits)
- ✅ Responsive navigation (hamburger menu)

### 5.4 Animations & Transitions

**CSS Transitions:**
```css
- Button hover effects (0.3s ease)
- Card hover transformations (0.4s cubic-bezier)
- Link underline animations
- Color changes on interaction
- Box-shadow transitions
```

**CSS Animations (@keyframes):**
```css
- Hero text fade-in and slide-up
- Floating badges gentle movement
- Rotating/pulsing icons
- Gradient background shift
- Loading spinners
- Scroll-triggered animations
- Staggered element entrances
```

**Advanced Effects:**
- ✅ 3D transforms on product cards
- ✅ Parallax scrolling effect
- ✅ Smooth scroll behavior
- ✅ Intersection Observer API (JS + CSS combo)

### 5.5 Visual Effects

**Box Shadows:**
```css
- Subtle: 0 2px 8px rgba(0,0,0,0.1)
- Medium: 0 4px 20px rgba(0,212,255,0.2)
- Heavy: 0 10px 40px rgba(0,0,0,0.3)
- Glow: 0 0 30px rgba(0,212,255,0.6)
```

**Gradient Backgrounds:**
- ✅ Linear gradients for sections
- ✅ Radial gradients for buttons
- ✅ Conic gradients for special effects
- ✅ Multiple overlapping gradients

**Backdrop Filters:**
```css
- Glass-morphism on navigation
- Blurred overlays on modals
- Frosted glass effect on cards
```

**CSS Filters:**
```css
- Blur, brightness, contrast
- Hover effects on images
- Grayscale to color on hover
```

### 5.6 Custom Properties (CSS Variables)
```css
:root {
  --color-primary: #00d4ff;
  --color-secondary: #ff6b35;
  --spacing-unit: 8px;
  --transition-speed: 0.3s;
  --border-radius: 12px;
  --shadow-medium: 0 4px 20px rgba(0,0,0,0.2);
}
```

### 5.7 Modern CSS Features
- ✅ CSS Grid template areas
- ✅ `clamp()` for responsive sizing
- ✅ `min()`, `max()` functions
- ✅ CSS custom properties with `var()`
- ✅ `aspect-ratio` property
- ✅ `object-fit` for images
- ✅ CSS scroll snap (optional)

---

## 6. Animation Strategy

### 6.1 Page Load Animations
```
1. Navigation: Slide down from top (0.6s delay)
2. Hero title: Fade in + slide up (0.8s)
3. Hero description: Fade in (1s delay)
4. Hero buttons: Scale in (1.2s delay)
5. Hero image: Fade in + rotate slightly (1s delay)
6. Floating badges: Stagger in (1.4s, 1.6s delay)
```

### 6.2 Scroll-Triggered Animations
```
- Fade in from bottom as elements enter viewport
- Stagger product cards (0.1s delay between each)
- Counter animations for statistics
- Progress bars for features
```

### 6.3 Hover Animations
```
- Product cards: Lift up (translateY(-10px)), add glow shadow
- Buttons: Scale up slightly, background shift
- Links: Underline slide-in animation
- Icons: Rotate or pulse
- Images: Zoom in slightly (scale: 1.05)
```

### 6.4 Interactive Animations
```
- Hamburger menu to X transition
- Accordion expand/collapse
- Modal fade in/out
- Toast notifications slide in
```

---

## 7. Unique Features (Beyond Garmin)

### 7.1 Innovation Ideas

1. **Interactive 3D Product Viewer**
   - CSS-only 3D watch that rotates on hover
   - Multiple color variants on click

2. **Animated Data Visualizations**
   - CSS-drawn charts for health metrics
   - Animated progress rings
   - Real-time (simulated) heart rate display

3. **Dark/Light Mode Toggle**
   - Smooth theme transition
   - Stored in localStorage (JS)
   - CSS custom properties for theming

4. **Micro-interactions**
   - Ripple effect on button clicks
   - Particle effects on CTAs
   - Animated checkmarks on features

5. **Custom Cursor**
   - Follows mouse with glow effect
   - Changes on hover over interactive elements

6. **Scroll Progress Indicator**
   - Top bar showing page scroll progress
   - Color-coded sections

7. **Comparison Tool**
   - Side-by-side product comparison
   - Animated table with highlights

8. **Virtual Try-On Preview**
   - CSS transform to show watch on wrist illustration
   - Multiple wrist sizes

---

## 8. Technical Specifications

### 8.1 File Structure
```
project-root/
│
├── index.html
├── css/
│   ├── styles.css (main stylesheet)
│   ├── variables.css (CSS custom properties)
│   ├── animations.css (all @keyframes)
│   └── responsive.css (media queries)
│
├── assets/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── products/
│   │   └── icons/
│   └── videos/
│
└── js/
    └── script.js (minimal JS for interactions)
```

### 8.2 Browser Compatibility
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

### 8.3 Performance Targets
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse Score: 90+ (Performance, Accessibility, Best Practices, SEO)
- Optimized images (WebP with fallbacks)
- Minified CSS for production

### 8.4 Accessibility (WCAG 2.1 AA)
- ✅ Semantic HTML
- ✅ Alt text for all images
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Color contrast ratio > 4.5:1
- ✅ ARIA labels where needed
- ✅ Skip to main content link

---

## 9. Content Strategy

### 9.1 Copywriting Tone
- **Confident & Aspirational:** "Your life. Quantified."
- **Technical but Accessible:** Explain IoT features clearly
- **Action-Oriented:** Strong CTAs
- **Benefit-Focused:** What user gains, not just features

### 9.2 Product Descriptions Template
```
[Product Name]
[One-line tagline capturing essence]
[2-3 sentences describing benefits and use case]

Key Features:
- Feature 1 (benefit)
- Feature 2 (benefit)
- Feature 3 (benefit)

Specifications:
- Display, Size, Material, Battery, Water Resistance
```

### 9.3 Microcopy
- Button Text: "Explore Devices", "Add to Cart", "Learn More"
- Form Labels: "Enter your email", "Subscribe to updates"
- Error Messages: "Please enter a valid email"
- Success Messages: "Added to cart!", "Subscribed successfully!"

---

## 10. Evaluation Checklist

### 10.1 HTML Criteria
- [ ] Proper semantic structure
- [ ] Valid HTML5 (passes W3C validator)
- [ ] Accessibility features implemented
- [ ] Clean, commented code
- [ ] Consistent indentation

### 10.2 CSS Criteria
- [ ] External stylesheet(s) used
- [ ] CSS Grid and Flexbox demonstrated
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Animations and transitions
- [ ] Hover effects and interactivity
- [ ] Modern CSS features (custom properties, clamp, etc.)
- [ ] Organized and maintainable code

### 10.3 Design Criteria
- [ ] Visually appealing and professional
- [ ] Consistent design language
- [ ] Good typography and spacing
- [ ] Effective use of color
- [ ] Intuitive user experience
- [ ] Premium feel matching reference site

### 10.4 Uniqueness Criteria
- [ ] At least one innovative feature beyond Garmin
- [ ] Original design approach (not direct copy)
- [ ] Creative implementation of concepts
- [ ] Attention to detail

---

## 11. Development Timeline

### Week 1 (Jan 22-28)
- [x] PRD creation and approval
- [ ] Wireframing and mockups
- [ ] HTML structure setup
- [ ] Basic CSS styling

### Week 2 (Jan 29 - Feb 2)
- [ ] Complete all sections
- [ ] Add animations and effects
- [ ] Responsive design implementation
- [ ] Testing and refinement
- [ ] Final polish and submission

**Daily Schedule:**
- Jan 29: Products section + Technology section
- Jan 30: Features section + Footer
- Jan 31: Animations + Advanced effects
- Feb 1: Responsive design + Testing
- Feb 2: Final review + Submission (6:30 PM)

---

## 12. Quality Assurance

### 12.1 Testing Checklist
- [ ] Cross-browser testing
- [ ] Responsive testing (multiple devices)
- [ ] HTML validation (W3C)
- [ ] CSS validation
- [ ] Accessibility testing
- [ ] Performance testing (Lighthouse)
- [ ] Link checking
- [ ] Form functionality

### 12.2 Code Review Points
- [ ] Consistent naming conventions
- [ ] Proper commenting
- [ ] No unused CSS
- [ ] Optimized selectors
- [ ] DRY principles followed
- [ ] Readable and maintainable

---

## 13. Bonus Features (If Time Permits)

1. **Smooth Page Transitions** - Fade between sections
2. **Loading Screen** - Animated logo on page load
3. **Easter Egg** - Hidden interaction for fun
4. **Custom 404 Page** - Styled error page
5. **Print Stylesheet** - Optimized for printing
6. **Reduced Motion Support** - Respect user preferences
7. **Service Worker** - Basic PWA functionality

---

## 14. Submission Package

### 14.1 Files to Submit
- index.html
- styles.css (or multiple CSS files)
- assets folder (images, icons)
- README.md (project documentation)

### 14.2 README.md Contents
```markdown
# NEXUS Wearables - IoT Wearable Tech Website

## Overview
[Brief description]

## Features Implemented
- HTML5 semantic elements
- CSS Grid and Flexbox layouts
- Responsive design
- CSS animations
- [List all major features]

## HTML Concepts Used
[List with examples]

## CSS Concepts Used
[List with examples]

## Unique Features
[Describe innovations beyond reference site]

## Browser Compatibility
[List supported browsers]

## Credits
- Fonts: Google Fonts
- Icons: Custom SVG
- Reference: Garmin.com
```

---

## 15. Success Metrics

**The project will be considered successful if it:**

1. ✅ Demonstrates comprehensive understanding of HTML5 and CSS3
2. ✅ Implements responsive design across all devices
3. ✅ Includes smooth, professional animations
4. ✅ Maintains visual consistency and premium aesthetic
5. ✅ Provides excellent user experience
6. ✅ Contains at least one unique innovation
7. ✅ Passes all validation tests
8. ✅ Meets accessibility standards
9. ✅ Shows attention to detail and polish
10. ✅ Impresses evaluators with creativity and execution

---

## 16. Resources

### 16.1 Design Inspiration
- Garmin.com (primary reference)
- Apple Watch website
- Fitbit.com
- Samsung Galaxy Watch pages
- Awwwards.com (web design inspiration)

### 16.2 Technical Resources
- MDN Web Docs (HTML/CSS reference)
- CSS-Tricks (tutorials and guides)
- Google Fonts
- Can I Use (browser compatibility)
- W3C Validator
- Chrome DevTools (debugging)

### 16.3 Color Tools
- Coolors.co (palette generation)
- Adobe Color (color wheel)
- Contrast Checker (accessibility)

### 16.4 Animation Resources
- Animista.net (CSS animations)
- Cubic-bezier.com (easing functions)
- CSS Animation tutorial videos

---

## Conclusion

This PRD outlines a comprehensive approach to creating a premium wearable tech website that will showcase your HTML and CSS mastery. The combination of modern design, advanced CSS techniques, and thoughtful user experience will result in a project that stands out.

**Key Takeaways:**
- Focus on clean, semantic HTML structure
- Implement cutting-edge CSS techniques
- Ensure full responsiveness
- Add delightful animations
- Create at least one unique feature
- Polish every detail

**Remember:** Quality over quantity. A well-executed website with polished details will score higher than a feature-packed but rough implementation.

Good luck with your project! 🚀
