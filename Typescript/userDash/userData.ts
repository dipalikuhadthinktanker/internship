interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

enum Role {
  All = "All",
  Admin = "Admin",
  Manager = "Manager",
  Staff = "Staff",
}

const itemPerPage: number = 5;
let currentPage: number = 1;
let userData: User[] = [];
let users: User[] = [];
let filterUsers: User[] = [];
const roleSelect = document.getElementById("role") as HTMLSelectElement | null;

const fetchUsers = async (page: number = 1): Promise<User[] | undefined> => {
  try {
    const response = await fetch(
      "https://mocki.io/v1/f0058c1e-c5c0-48aa-99ed-52adff60137f"
    );
    users = await response.json();
    currentPage = page;
    filterByRole(Role.All);
    renderPaginatedData();
    paginated();
    return users;
  } catch (error) {
    console.error("Error fetching users", error);
  }
};

const renderData = (userData: User[] | undefined) => {
  const tableContainer: HTMLElement | null =
    document.getElementById("user-list");
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
      .map(
        (userItem) =>
          `<tr>
               <td>${userItem.id}</td>
               <td>${userItem.name}</td>
               <td>${userItem.email}</td>
               <td>${userItem.role}</td> 
          </tr>`
      )
      .join("");
    table += `</tbody></table>`;
  }

  if (tableContainer) {
    tableContainer.innerHTML = table;
  }
};

const changePage = (page: number) => {
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
  let buttons: string = "";

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

  paginationHtml! ? (paginationHtml.innerHTML = buttons) : "";
};

const roleSelector = () => {
  if (roleSelect) {
    let optionsHtml: string = "";
    for (const role in Role) {
      const dropvalue = Role[role as keyof typeof Role];
      optionsHtml += `<option value="${dropvalue}" ${
        dropvalue === Role.All ? "selected" : ""
      }>${dropvalue}</option>`;
    }
    roleSelect.innerHTML = optionsHtml;
    roleSelect.addEventListener("change", (e: Event) => {
      const target = e.target as HTMLSelectElement;
      filterByRole(target.value as Role);
      currentPage = 1;
      renderPaginatedData();
      paginated();
    });
  }
};

const filterByRole = (selectedRole: Role) => {
  if (selectedRole === Role.All) {
    filterUsers = users;
  } else {
    filterUsers = users.filter((user) => user.role === selectedRole);
  }
};

const resetFilter = () => {
  const resetButton = document.getElementById("restData");
  resetButton?.addEventListener("click", () => {
    if (roleSelect) {
      roleSelect.value = Role.All;
    }
    filterByRole(Role.All);
    renderPaginatedData();
    paginated();
  });
};

(async () => {
  roleSelector();
  await fetchUsers();
  resetFilter();
})();
