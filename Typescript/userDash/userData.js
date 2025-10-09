"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Role;
(function (Role) {
    Role["All"] = "All";
    Role["Admin"] = "Admin";
    Role["Manager"] = "Manager";
    Role["Staff"] = "Staff";
})(Role || (Role = {}));
const itemPerPage = 5;
let currentPage = 1;
let userData = [];
let users = [];
let filterUsers = [];
const roleSelect = document.getElementById("role");
const fetchUsers = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (page = 1) {
    try {
        const response = yield fetch("https://mocki.io/v1/f0058c1e-c5c0-48aa-99ed-52adff60137f");
        users = yield response.json();
        currentPage = page;
        filterByRole(Role.All);
        renderPaginatedData();
        paginated();
        return users;
    }
    catch (error) {
        console.error("Error fetching users", error);
    }
});
const renderData = (userData) => {
    const tableContainer = document.getElementById("user-list");
    let table = `<table>
                 <thead>
                   <tr>
                       <th>ID</th>
                       <th>Name</th>
                       <th>Email</th>
                       <th>Role</th>
                   </tr>
                  </thead>
                  <tbody>`;
    if (userData) {
        table += userData
            .map((userItem) => `<tr>
               <td>${userItem.id}</td>
               <td>${userItem.name}</td>
               <td>${userItem.email}</td>
               <td>${userItem.role}</td> 
          </tr>`)
            .join("");
        table += `</tbody></table>`;
    }
    if (tableContainer) {
        tableContainer.innerHTML = table;
    }
};
const changePage = (page) => {
    currentPage = page;
    renderPaginatedData();
    paginated();
};
const renderPaginatedData = () => {
    const start = (currentPage - 1) * itemPerPage;
    const end = start + itemPerPage;
    userData = filterUsers.slice(start, end);
    renderData(userData);
};
const paginated = () => {
    const totalPage = Math.ceil(filterUsers.length / itemPerPage);
    const paginationHtml = document.getElementById("pagination");
    let buttons = "";
    buttons +=
        currentPage > 1
            ? `<button onclick="changePage(${currentPage - 1})">&laquo;</button>`
            : `<button disabled>&laquo;</button>`;
    if (currentPage > 2) {
        buttons += `<button onclick="changePage(1)">1</button>`;
        if (currentPage > 3) {
            buttons += `<span class="dots">...</span>`;
        }
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
        if (currentPage < totalPage - 2) {
            buttons += `<span class="dots">...</span>`;
        }
        buttons += `<button onclick="changePage(${totalPage})">${totalPage}</button>`;
    }
    buttons +=
        currentPage < totalPage
            ? `<button onclick="changePage(${currentPage + 1})">&raquo;</button>`
            : `<button disabled>&raquo;</button>`;
    paginationHtml ? (paginationHtml.innerHTML = buttons) : "";
};
const roleSelector = () => {
    if (roleSelect) {
        let optionsHtml = "";
        for (const role in Role) {
            const dropvalue = Role[role];
            optionsHtml += `<option value="${dropvalue}" ${dropvalue === Role.All ? "selected" : ""}>${dropvalue}</option>`;
        }
        roleSelect.innerHTML = optionsHtml;
        roleSelect.addEventListener("change", (e) => {
            const target = e.target;
            filterByRole(target.value);
            currentPage = 1;
            renderPaginatedData();
            paginated();
        });
    }
};
const filterByRole = (selectedRole) => {
    if (selectedRole === Role.All) {
        filterUsers = users;
    }
    else {
        filterUsers = users.filter((user) => user.role === selectedRole);
    }
};
const resetFilter = () => {
    const resetButton = document.getElementById("restData");
    resetButton === null || resetButton === void 0 ? void 0 : resetButton.addEventListener("click", () => {
        if (roleSelect) {
            roleSelect.value = Role.All;
        }
        filterByRole(Role.All);
        renderPaginatedData();
        paginated();
    });
};
(() => __awaiter(void 0, void 0, void 0, function* () {
    roleSelector();
    yield fetchUsers();
    resetFilter();
}))();
