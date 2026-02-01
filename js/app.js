/* 
  APP.JS
  Strict Logic: Only UI State. No business logic.
*/

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    // 1. Navigation Scroll Effect
    // "If nav jumps even 1px on scroll -> premium illusion breaks."
    // We only toggle the class for the BLUR, not the layout.
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar ? navbar.classList.add('scrolled') : null;
        } else {
            navbar ? navbar.classList.remove('scrolled') : null;
        }
    });

    // 2. Cart Logic (Local State for UI Demo)
    const cartItems = document.querySelectorAll('.cart-item');

    if (cartItems.length > 0) {
        cartItems.forEach(item => {
            const minusBtn = item.querySelector('.btn-qty.minus');
            const plusBtn = item.querySelector('.btn-qty.plus');
            const qtyInput = item.querySelector('.qty-input');
            const priceEl = item.querySelector('.item-price');
            const subtotalEl = item.querySelector('.item-subtotal');

            // Extract numeric price (remove $)
            const basePrice = parseFloat(priceEl.dataset.price);

            const updateItemTotal = () => {
                const qty = parseInt(qtyInput.value);
                const sub = basePrice * qty;
                subtotalEl.textContent = '$' + sub.toFixed(2);
                updateGrandTotal();
            };

            minusBtn.addEventListener('click', () => {
                let qty = parseInt(qtyInput.value);
                if (qty > 1) {
                    qtyInput.value = qty - 1;
                    updateItemTotal();
                }
            });

            plusBtn.addEventListener('click', () => {
                let qty = parseInt(qtyInput.value);
                if (qty < 10) { // Cap at 10
                    qtyInput.value = qty + 1;
                    updateItemTotal();
                }
            });
        });

        // Initial Calculation
        updateGrandTotal();
    }

    console.log("System Initialized: NEXUS Operations Normal");
});

function updateGrandTotal() {
    const subtotals = document.querySelectorAll('.item-subtotal');
    let total = 0;

    subtotals.forEach(el => {
        total += parseFloat(el.textContent.replace('$', ''));
    });

    const summarySub = document.getElementById('summary-subtotal');
    const summaryTotal = document.getElementById('summary-total');

    if (summarySub && summaryTotal) {
        summarySub.textContent = '$' + total.toFixed(2);
        summaryTotal.textContent = '$' + total.toFixed(2); // Assuming free shipping
    }
}
