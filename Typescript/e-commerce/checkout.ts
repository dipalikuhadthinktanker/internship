import type { CartItem, Product } from "./interface/IProduct";

let cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]").map(
  (item: Product) => ({
    ...item,
    quantity: item.quantity ?? 1,
  })
);

// DOM elements
const checkoutItemsContainer = document.getElementById(
  "checkoutItems"
) as HTMLInputElement;
const itemCount = document.getElementById("itemCount") as HTMLInputElement;
const subtotalEl = document.getElementById("subtotal") as HTMLInputElement;
const discountEl = document.getElementById("discount") as HTMLInputElement;
const finalTotalEl = document.getElementById("finalTotal") as HTMLInputElement;
const couponInput = document.getElementById("couponCode") as HTMLInputElement;
const applyCouponBtn = document.getElementById("applyCouponBtn")!;
let discount = parseFloat(localStorage.getItem("discount"));

// Save updated cart to localStorage
const saveCart = () => {
  if (cart.length === 0) {
    discount = 0;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("discount", discount.toString());
};

// Calculate totals
const calculateTotals = () => {
  if (cart.length === 0) {
    discount = 0;
    localStorage.setItem("discount", "0");
  }
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountAmount = (subtotal * discount) / 100;
  const final = subtotal - discountAmount;

  itemCount.textContent = cart.length.toString();
  subtotalEl.textContent = `₹${subtotal.toFixed(2)}`;
  finalTotalEl.textContent = `₹${final.toFixed(2)}`;
  if (discount > 0) {
    discountEl.parentElement.style.display = "flex";
    discountEl.textContent = `-₹${discountAmount.toFixed(2)} (${discount}%)`;
  } else {
    discountEl.parentElement.style.display = "none";
  }
};

// Render checkout table
const renderCheckout = () => {
  checkoutItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    checkoutItemsContainer.innerHTML = `
      <tr><td colspan="4" style="text-align:center;">Your cart is empty.</td></tr>`;
    calculateTotals();
    return;
  }

  cart.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("cart-card");
    div.innerHTML = `
      <div class="cart-card-left">
        <img src="${item.image}" alt="${item.title}">
      </div>
      <div class="cart-card-right">
        <h4>${item.title}</h4>
        <span class="price">₹${item.price.toFixed(2)}</span>
        <div class="quantity-control">
          <button class="minus-btn"><i class="fa fa-minus"></i></button>
          <span>${item.quantity}</span>
          <button class="plus-btn"><i class="fa fa-plus"></i></button>
        </div>
      </div>
    `;

    // Quantity handlers
    const minusBtn = div.querySelector(".minus-btn") as HTMLButtonElement;
    const plusBtn = div.querySelector(".plus-btn") as HTMLButtonElement;

    minusBtn.addEventListener("click", () => {
      if (item.quantity > 1) item.quantity--;
      else cart = cart.filter((p) => p.id !== item.id);
      saveCart();
      renderCheckout();
    });

    plusBtn.addEventListener("click", () => {
      item.quantity++;
      saveCart();
      renderCheckout();
    });

    checkoutItemsContainer.appendChild(div);
  });

  calculateTotals();
};

// Apply coupon
applyCouponBtn.addEventListener("click", () => {
  const code = couponInput.value;
  const subtotal = cart.reduce(
    (sum, item): number => sum + item.price * item.quantity,
    0
  );

  couponInput.value = "";
  switch (code) {
    case "AB1":
      discount = 10;
      alert(`Coupon applied! You got ₹${discount} off.`);
      break;

    case "AB2":
      if (subtotal > 1000) {
        discount = 20;
        alert(`Coupon applied! You got ₹${discount} off (Subtotal > ₹1000).`);
      } else {
        alert("Subtotal is below ₹1000 — AB2 coupon not applicable.");
      }
      break;

    default:
      alert("Invalid coupon code.");
  }

  saveCart();
  calculateTotals();
});

// Initial render
renderCheckout();
