var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let users = [];
let searchTimer;
const itemPerPage = 10;
let currentPage = 1;
let filteredUsers = [];
const userContainer = document.getElementById("userContainer");
const searchInput = document.getElementById("searchInput");
const refreshBtn = document.getElementById("refreshBtn");
const modal = document.getElementById("userModal");
const closeModal = document.getElementById("closeModal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalEmail = document.getElementById("modalEmail");
const modalCountry = document.getElementById("modalCountry");
const modalPhone = document.getElementById("modalPhone");
const modalDOB = document.getElementById("modalDob");
const modalAge = document.getElementById("modalAge");
const paginationContainer = document.getElementById("pagination");
const loaderHtml = document.getElementById("loader");
// Show loader
const showLoader = () => {
    loaderHtml.style.display = "block";
    userContainer.style.display = "none";
    paginationContainer.style.display = "none";
};
// Hide loader
const hideLoader = () => {
    loaderHtml.style.display = "none";
    userContainer.style.display = "grid";
    paginationContainer.style.display = "flex";
};
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        showLoader();
        const response = yield fetch("https://randomuser.me/api/?results=50");
        const data = yield response.json();
        users = data.results;
        filteredUsers = [...users];
        currentPage = 1;
        renderPaginatedData();
        paginated();
        return users;
    }
    catch (error) {
        console.error("Error fetching users", error);
        userContainer.innerHTML = `<p class="error">${error.message}</p>`;
    }
    finally {
        hideLoader();
    }
});
//Render User
const renderUser = (list) => {
    userContainer.innerHTML = "";
    list.forEach((user) => {
        const card = document.createElement("div");
        card.className = "user-card";
        card.innerHTML = `
      <img src="${user.picture.medium}" alt="User Image">
      <h3>${user.name.first} ${user.name.last}</h3>
      <p>${user.location.country}</p>
    `;
        card.addEventListener("click", () => showModel(user));
        userContainer.appendChild(card);
    });
};
// Change page
window.changePage = (page) => {
    showLoader();
    setTimeout(() => {
        currentPage = page;
        renderPaginatedData();
        paginated();
        hideLoader();
    }, 300);
};
const renderPaginatedData = () => {
    const start = (currentPage - 1) * itemPerPage;
    const end = start + itemPerPage;
    const paginatedList = filteredUsers.slice(start, end);
    renderUser(paginatedList);
};
// Paginated
const paginated = () => {
    const totalPage = Math.ceil(filteredUsers.length / itemPerPage);
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
//Search bar
const handleSearch = () => {
    searchInput.addEventListener("keyup", () => {
        clearTimeout(searchTimer);
        showLoader();
        searchTimer = setTimeout(() => {
            const searchValue = searchInput.value.toLowerCase();
            const filtered = users.filter((item) => {
                const firstName = item.name.first.toLowerCase();
                const lastName = item.name.last.toLowerCase();
                const fullName = `${firstName} ${lastName}`;
                const countryName = item.location.country.toLowerCase();
                return (firstName.includes(searchValue) ||
                    lastName.includes(searchValue) ||
                    fullName.includes(searchValue) ||
                    countryName.includes(searchValue));
            });
            filteredUsers = filtered;
            currentPage = 1;
            if (filteredUsers.length === 0) {
                userContainer.innerHTML = `<p class="error">No users found.</p>`;
                paginationContainer.innerHTML = "";
                hideLoader();
                return;
            }
            renderPaginatedData();
            paginated();
            hideLoader();
        }, 500);
    });
};
//Open model
const showModel = (user) => {
    modal.style.display = "flex";
    modalImage.src = user.picture.large;
    modalName.textContent = `Name: ${user.name.first} ${user.name.last}`;
    modalEmail.textContent = `Email: ${user.email}`;
    modalCountry.textContent = `Country: ${user.location.country}`;
    modalPhone.textContent = `Phone no: ${user.phone}`;
    modalDOB.textContent = `Birth date: ${new Date(user.dob.date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    })}`;
    modalAge.textContent = `Age: ${user.dob.age}`;
};
// Close modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
// Refresh users
refreshBtn.addEventListener("click", fetchUsers);
//Initial load
fetchUsers();
handleSearch();
export {};
//# sourceMappingURL=randUser.js.map