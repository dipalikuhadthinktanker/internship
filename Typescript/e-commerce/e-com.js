var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let allProducts = [];
let cart = JSON.parse(localStorage.getItem("cart") || "[]");
const itemsPerPage = 8;
let currentPage = 1;
let filteredProducts = [];
const productContainer = document.getElementById("productContainer");
//Head cart item
const cartCount = document.getElementById("cartCount");
const cartItemsContainer = document.getElementById("cartItems");
const cartIcon = document.getElementById("cartIcon");
const carthideShow = document.querySelector(".cart");
const cartTotalPrice = document.getElementById("cartTotal");
const checkoutbtn = document.getElementById("checkoutBtn");
//Category nav tab
const categoryButtons = document.querySelectorAll(".category-btn");
//Search input
const searchInput = document.getElementById("searchInput");
//Sort price and rate
const sortSelect = document.getElementById("sortSelect");
//Pagination
const paginationContainer = document.getElementById("pagination");
//Loader
const loaderHtml = document.getElementById("loader");
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
const fetchProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        showLoader();
        const response = yield fetch("https://fakestoreapi.com/products");
        allProducts = yield response.json();
        console.log(allProducts);
        filteredProducts = [...allProducts];
        currentPage = 1;
        cartCount.textContent = cart.length.toString();
        renderPaginatedData();
        paginatedProduct();
        return filteredProducts;
    }
    catch (error) {
        console.error("Error fetching users", error);
        productContainer.innerHTML = `<p class="error">Failed to load products</p>`;
    }
    finally {
        hideLoader();
    }
});
//Render product info with html
const renderProducts = (items) => {
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
             <p><i class="fa fa-star" aria-hidden="true"></i> ${product.rating.rate}</p>
           </div>
           <div class="pric-cartbtn">
             <span class="price">₹${product.price.toFixed(2)}</span>
             <button class="add-btn" title="Add to cart" data-id="${product.id}"><i class="fa fa-plus" aria-hidden="true"></i> Cart</button>
           </div>
        </div>
      </div>`;
        const addcartbtn = card.querySelector(".add-btn");
        addcartbtn.addEventListener("click", () => addToCart(product.id));
        productContainer.appendChild(card);
    });
};
// Change page
window.changePage = (page) => {
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
    let buttons = "";
    buttons +=
        currentPage > 1
            ? `<button onclick="changePage(${currentPage - 1})">&laquo;</button>`
            : `<button disabled>&laquo;</button>`;
    if (currentPage > 2) {
        buttons += `<button onclick="changePage(1)">1</button>`;
        if (currentPage > 3)
            buttons += `<span class="dots">...</span>`;
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
        if (currentPage < totalPage - 2)
            buttons += `<span class="dots">...</span>`;
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
                : (filteredProducts = allProducts.filter((p) => p.category === category));
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
                filteredProducts = _.orderBy(filteredProducts, [(p) => p.rating.rate], ["desc"]);
                break;
            case "ratingLow":
                filteredProducts = _.orderBy(filteredProducts, [(p) => p.rating.rate], ["asc"]);
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
const addToCart = (id) => {
    const product = allProducts.find((p) => p.id === id);
    if (!product)
        return;
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
const removeFromCart = (id) => {
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
        <button data-id="${item.id}"><i class="fa fa-trash" aria-hidden="true"></i></button>
      </div>
    `;
        const removeBtn = div.querySelector("button");
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
    if (!carthideShow.contains(e.target)) {
        carthideShow.classList.remove("show");
    }
});
fetchProducts();
renderCart();
export {};
//# sourceMappingURL=e-com.js.map