import type { Product } from "./interface/IProduct";

declare const _: any;
let allProducts: Product[] = [];
let cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
const itemsPerPage: number = 8;
let currentPage: number = 1;
let filteredProducts: Product[] = [];
const productContainer = document.getElementById(
  "productContainer"
) as HTMLElement;
//Head cart item
const cartCount = document.getElementById("cartCount") as HTMLElement;
const cartItemsContainer = document.getElementById("cartItems") as HTMLElement;
const cartIcon = document.getElementById("cartIcon") as HTMLElement;
const carthideShow = document.querySelector(".cart") as HTMLElement;
const cartTotalPrice = document.getElementById("cartTotal") as HTMLElement;
const checkoutbtn = document.getElementById("checkoutBtn") as HTMLElement;

//Category nav tab
const categoryButtons =
  document.querySelectorAll<HTMLButtonElement>(".category-btn");
//Search input
const searchInput = document.getElementById("searchInput") as HTMLInputElement;
//Sort price and rate
const sortSelect = document.getElementById("sortSelect") as HTMLSelectElement;
//Pagination
const paginationContainer = document.getElementById(
  "pagination"
) as HTMLElement;
//Loader
const loaderHtml = document.getElementById("loader") as HTMLElement;

//save cart in localStorage
const saveCartToLocalStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
// Show loader
const showLoader = () => {
  loaderHtml.style.display = "block";
  productContainer.style.display = "none";
  paginationContainer.style.display = "none";
};
// Hide loader
const hideLoader = () => {
  loaderHtml.style.display = "none";
  productContainer.style.display = "grid";
  paginationContainer.style.display = "flex";
};

//Fetch products
const fetchProducts = async (): Promise<Product[] | undefined> => {
  try {
    showLoader();
    const response = await fetch("https://fakestoreapi.com/products");
    allProducts = await response.json();
    console.log(allProducts);
    filteredProducts = [...allProducts];
    currentPage = 1;
    cartCount.textContent = cart.length.toString();
    renderPaginatedData();
    paginatedProduct();
    return filteredProducts;
  } catch (error) {
    console.error("Error fetching users", error);
    productContainer.innerHTML = `<p class="error">Failed to load products</p>`;
  } finally {
    hideLoader();
  }
};
//Render product info with html
const renderProducts = (items: Product[]) => {
  productContainer.innerHTML = "";
  items.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <div class="prod-info">
        <h3 title="${product.title}">${product.title}</h3>
        <div class="production">
           <div class="cat-rat-part">
             <p>Category: ${product.category
               .split(" ")
               .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
               .join(" ")}</p>
             <p><i class="fa fa-star" aria-hidden="true"></i> ${
               product.rating.rate
             }</p>
           </div>
           <div class="pric-cartbtn">
             <span class="price">₹${product.price.toFixed(2)}</span>
             <button class="add-btn" title="Add to cart" data-id="${
               product.id
             }"><i class="fa fa-plus" aria-hidden="true"></i> Cart</button>
           </div>
        </div>
      </div>`;
    const addcartbtn = card.querySelector(".add-btn") as HTMLButtonElement;
    addcartbtn.addEventListener("click", () => addToCart(product.id));
    productContainer.appendChild(card);
  });
};
// Change page
(window as any).changePage = (page: number) => {
  showLoader();
  setTimeout(() => {
    currentPage = page;
    renderPaginatedData();
    paginatedProduct();
    hideLoader();
  }, 300);
};
//Render page on products
const renderPaginatedData = () => {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedList = filteredProducts.slice(start, end);
  if (paginatedList.length === 0) {
    productContainer.innerHTML = `<p class="error">Invalid product name</p>`;
    paginationContainer.style.display = "none";
    return;
  }
  renderProducts(paginatedList);
};

// Paginated
const paginatedProduct = () => {
  const totalPage = Math.ceil(filteredProducts.length / itemsPerPage);
  let buttons: string = "";

  buttons +=
    currentPage > 1
      ? `<button onclick="changePage(${currentPage - 1})">&laquo;</button>`
      : `<button disabled>&laquo;</button>`;

  if (currentPage > 2) {
    buttons += `<button onclick="changePage(1)">1</button>`;
    if (currentPage > 3) buttons += `<span class="dots">...</span>`;
  }

  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(totalPage, currentPage + 1);
  for (let i = startPage; i <= endPage; i++) {
    buttons +=
      i === currentPage
        ? `<div class="btn-group"><button class="active" onclick="changePage(${i})">${i}</button></div>`
        : `<div class="btn-group"><button onclick="changePage(${i})">${i}</button></div>`;
  }

  if (currentPage < totalPage - 1) {
    if (currentPage < totalPage - 2) buttons += `<span class="dots">...</span>`;
    buttons += `<button onclick="changePage(${totalPage})">${totalPage}</button>`;
  }

  buttons +=
    currentPage < totalPage
      ? `<button onclick="changePage(${currentPage + 1})">&raquo;</button>`
      : `<button disabled>&raquo;</button>`;

  paginationContainer.innerHTML = buttons;
};

// Category nav buttons
categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    showLoader();
    categoryButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    sortSelect.value = "none";
    searchInput.value = "";
    const category = btn.dataset.category;
    setTimeout(() => {
      category === "all"
        ? (filteredProducts = [...allProducts])
        : (filteredProducts = allProducts.filter(
            (p) => p.category === category
          ));
      currentPage = 1;
      renderPaginatedData();
      paginatedProduct();
      hideLoader();
    }, 300);
  });
});

//Search by name
const handleSearch = _.debounce(() => {
  const searchTerm = searchInput.value.toLowerCase().trim();
  filteredProducts = searchTerm
    ? allProducts.filter((p) => p.title.toLowerCase().includes(searchTerm))
    : [...allProducts];
  categoryButtons.forEach((b) => b.classList.remove("active"));
  const allBtn = document.querySelector('[data-category="all"]');
  if (allBtn) {
    allBtn.classList.add("active");
  }
  sortSelect.value = "none";
  currentPage = 1;
  renderPaginatedData();
  paginatedProduct();
}, 300);
searchInput.addEventListener("input", handleSearch);

//Sorting price and rate of products
sortSelect.addEventListener("change", () => {
  const sortValue = sortSelect.value;
  searchInput.value = "";
  showLoader();
  setTimeout(() => {
    switch (sortValue) {
      case "priceLow":
        filteredProducts = _.orderBy(filteredProducts, ["price"], ["asc"]);
        break;
      case "priceHigh":
        filteredProducts = _.orderBy(filteredProducts, ["price"], ["desc"]);
        break;
      case "ratingHigh":
        filteredProducts = _.orderBy(
          filteredProducts,
          [(p) => p.rating.rate],
          ["desc"]
        );
        break;
      case "ratingLow":
        filteredProducts = _.orderBy(
          filteredProducts,
          [(p) => p.rating.rate],
          ["asc"]
        );
        break;
      default:
        filteredProducts = [...allProducts];
        break;
    }

    currentPage = 1;
    renderPaginatedData();
    paginatedProduct();
    hideLoader();
  }, 300);
});

//Add to cart
const addToCart = (id: number) => {
  const product = allProducts.find((p) => p.id === id);
  if (!product) return;
  if (cart.find((item) => item.id === id)) {
    alert("This product is already in your cart!");
    return;
  }
  cart.push(product);
  saveCartToLocalStorage();
  cartCount.textContent = cart.length.toString();
  renderCart();
};

//Remove from cart
const removeFromCart = (id: number) => {
  cart = cart.filter((item) => item.id !== id);
  saveCartToLocalStorage();
  cartCount.textContent = cart.length.toString();
  renderCart();
};
// Calculate total price
const calculateTotal = () => {
  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);
  cartTotalPrice.textContent = `$${total.toFixed(2)}`;
};
// Checkout button
checkoutbtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty. Add some items before checkout!");
    return;
  }
  saveCartToLocalStorage();
  window.location.href = "checkout.html";
});

// Render cart
const renderCart = () => {
  cartItemsContainer.innerHTML = "";
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    cartTotalPrice.textContent = "₹0.00";
    return;
  }
  cart.forEach((item) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div class="hed-cart-item-left">
        <img src="${item.image}" alt="${item.title}">
        <div class="hed-cart-item-center">
        <span title="${item.title}">${item.title.slice(0, 10)}..</span>
          <p>Price: ₹${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div>
        <button data-id="${
          item.id
        }"><i class="fa fa-trash" aria-hidden="true"></i></button>
      </div>
    `;
    const removeBtn = div.querySelector("button")!;
    removeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      removeFromCart(item.id);
    });
    cartItemsContainer.appendChild(div);
  });
  calculateTotal();
};

// Head cart item dropdown
cartIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  carthideShow.classList.toggle("show");
  renderCart();
});

// Close dropdown
document.addEventListener("click", (e) => {
  if (!carthideShow.contains(e.target as Node)) {
    carthideShow.classList.remove("show");
  }
});

fetchProducts();
renderCart();
