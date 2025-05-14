// Sidebar Phone View Toggle......

const toggleBtn = document.querySelector(".toggle-sidebar");
const sidebar = document.querySelector(".sidebar");
const closeSidebarBtn = document.getElementById("close-sidebar");

// Function to toggle the sidebar
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");

  // Add or remove the 'active-toggle' class on the button when sidebar is active
  toggleBtn.classList.toggle(
    "active-toggle",
    sidebar.classList.contains("active")
  );
});

// Close sidebar when close button is clicked
closeSidebarBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  toggleBtn.classList.remove("active-toggle"); // Remove active toggle when sidebar is closed
});

// Close sidebar when clicking outside of it
document.addEventListener("click", (event) => {
  if (
    sidebar.classList.contains("active") &&
    !sidebar.contains(event.target) &&
    !toggleBtn.contains(event.target)
  ) {
    sidebar.classList.remove("active");
    toggleBtn.classList.remove("active-toggle"); // Remove active toggle when clicking outside
  }
});

// Sidebar Phone View Toggle......

// Grid View and Single View.........
const gridViewBtn = document.querySelector(".grid-view");
const singleViewBtn = document.querySelector(".single-view");
const wrapper = document.querySelector(".wrapper");

gridViewBtn.addEventListener("click", () => {
  wrapper.classList.remove("single-column");
});

singleViewBtn.addEventListener("click", () => {
  wrapper.classList.add("single-column");
});
// Grid View and Single View.........

// Function to update the showing entries dynamically
function updateShowingEntries() {
  const products = document.querySelectorAll(".product-card");
  const visibleProducts = Array.from(products).filter(
    (product) => product.style.display !== "none"
  );
  const totalProducts = products.length;
  const visibleCount = visibleProducts.length;

  // Update the display-info span with the dynamic count
  const displayInfo = document.getElementById("display-info");
  displayInfo.innerText = `Showing 1–${visibleCount} of ${totalProducts} results`;
}

// Function to filter products by category
function filterByCategory(category) {
  const products = document.querySelectorAll(".product-card");

  products.forEach((product) => {
    // Show all products if "all" category is selected
    if (category === "all") {
      product.style.display = "block";
    } else {
      // Show product if it matches the category, otherwise hide it
      product.style.display =
        product.getAttribute("data-category") === category ? "block" : "none";
    }
  });

  // Update the showing entries after filtering
  updateShowingEntries();

  // Set the active category link
  setActiveCategoryLink(category);
}

// Function to set the active category link
function setActiveCategoryLink(activeCategory) {
  const categoryLinks = document.querySelectorAll(".category-link");

  categoryLinks.forEach((link) => {
    // Remove 'active' class from all links
    link.classList.remove("active");

    // Add 'active' class to the clicked link
    if (link.getAttribute("data-category") === activeCategory) {
      link.classList.add("active");
    }
  });
}

// Add event listeners to category links
const categoryLinks = document.querySelectorAll(".category-link");
categoryLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    const category = this.getAttribute("data-category");
    filterByCategory(category); // Filter by the clicked category
  });
});

// // Search functionality Start..............
// Function to update showing entries dynamically
function updateShowingEntries() {
  const products = document.querySelectorAll(".product-card");
  const visibleProducts = Array.from(products).filter(
    (product) => product.style.display !== "none"
  );
  const totalProducts = products.length;
  const visibleCount = visibleProducts.length;

  // Update the display-info span with the dynamic count
  const displayInfo = document.getElementById("display-info");
  displayInfo.innerText = `Showing 1–${visibleCount} of ${totalProducts} results`;
}

// Select all search bars
const searchBars = document.querySelectorAll(".search-bar");

// Add input event listener to each search bar
searchBars.forEach((searchBar) => {
  searchBar.addEventListener("input", function () {
    const searchValue = this.value.toLowerCase();
    const products = document.querySelectorAll(".product-card");

    products.forEach((product) => {
      const productTitle = product.querySelector("h3").innerText.toLowerCase();
      // Show product if it matches the search input, otherwise hide it
      product.style.display = productTitle.includes(searchValue)
        ? "block"
        : "none";
    });

    // Update the showing entries after searching
    updateShowingEntries();
  });
});

// Initial call to set the correct product count
updateShowingEntries();

// Initial call to show all products when the page loads
filterByCategory("all");

// Filter Price Start............
function updatePrice(value) {
  document.getElementById("priceValue").innerText = value;

  // Calculate the percentage based on the value
  var percentage = (value / 150) * 100;

  // Update the background gradient to reflect the exact color #e31736
  document.getElementById(
    "priceRange"
  ).style.background = `linear-gradient(to right, #e31736 ${percentage}%, #ddd ${percentage}%)`;
}

// Filter Price Start............
