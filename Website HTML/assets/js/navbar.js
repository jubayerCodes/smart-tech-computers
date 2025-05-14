$(document).ready(function () {
  // Add class on parent which 'li' children has submenu
  $("ul.submenu").parents("li").addClass("megamenu");

  // Menu Icon Append prepend for responsive
  $(window)
    .on("resize", function () {
      if ($(window).width() < 1150) {
        // Add #menu_trigger if it doesn't exist
        if (!$("#menu_trigger").length) {
          $("#mainmenu").prepend(
            '<a href="#" id="menu_trigger" class="menulines-button"><span class="menulines"></span></a>'
          );
        }
        // Add .navtrigger if it doesn't exist
        if (!$(".navtrigger").length) {
          $(".megamenu > a").append('<span class="navtrigger"></span>');
        }
        // Wrap .menu in .mobile-menu if it doesn't exist
        if (!$(".mobile-menu").length) {
          $(".menu").wrap('<div class="mobile-menu"></div>');
          $(".mobile-menu").css({
            position: "fixed",
            top: 84.57,
            left: "-100%",
            height: "100%",
            width: "300px",
            zIndex: 1000,
            transition: "left 0.5s ease",
          });
        }
        // Add back button for submenus if it doesn't exist
        if (!$(".submenu > .backmenu-row").length) {
          $(".submenu").each(function () {
            var subvalue = $(this).prev("a").text();
            $(this).prepend(
              '<div class="backmenu-row"><a href="#" class="back-trigger"></a><em>' +
                subvalue +
                "</em></div>"
            );
          });
        }
      } else {
        // Remove elements added for mobile view
        $("#menu_trigger").remove();
        $(".navtrigger").remove();
        $(".menu").unwrap(".mobile-menu");
        $(".back-trigger").remove();
      }
    })
    .resize();

  // Mobile menu toggle for #menu_trigger
  $(document).on("click", "#menu_trigger", function () {
    toggleMobileMenu();
    return false;
  });

  // Mobile menu toggle for #menu_trigger2 (independent trigger)
  $(document).on("click", "#menu_trigger2", function () {
    toggleMobileMenu();
    return false;
  });

  // Function to toggle mobile menu
  function toggleMobileMenu() {
    const $mobileMenu = $(".mobile-menu");
    if ($mobileMenu.css("left") === "0px") {
      $mobileMenu.css("left", "-100%"); // Close menu
      $("#menu_trigger, #menu_trigger2").removeClass("menuopen");
      resetDropdowns(); // Reset dropdowns to default state
    } else {
      $mobileMenu.css("left", "0"); // Open menu
      $("#menu_trigger, #menu_trigger2").addClass("menuopen");
    }
  }

  // Function to reset dropdowns to default state
  function resetDropdowns() {
    $("li.megamenu").removeClass("sub-open"); // Remove sub-open class
    // Add any other reset logic here if needed
  }

  // While open submenu add class
  $(document).on("click", ".navtrigger", function () {
    // Close all other open submenus
    $("li.megamenu").removeClass("sub-open");
    // Open the clicked submenu
    $(this).parents("li").addClass("sub-open");
    return false;
  });

  // Back to menu in mobile
  $(document).on("click", ".back-trigger", function () {
    $(this).closest("li").removeClass("sub-open");
    return false;
  });

  // Close mobile menu when close_btn is clicked
  $(document).on("click", ".close_btn", function () {
    $(".mobile-menu").css("left", "-100%"); // Close menu
    $("#menu_trigger, #menu_trigger2").removeClass("menuopen");
    resetDropdowns(); // Reset dropdowns to default state
    return false;
  });

  // Close mobile menu if clicked outside
  $(document).on("click", function (e) {
    const $mobileMenu = $(".mobile-menu");
    if (!$(e.target).closest(".mobile-menu, #menu_trigger, #menu_trigger2").length) {
      $mobileMenu.css("left", "-100%"); // Close menu
      $("#menu_trigger, #menu_trigger2").removeClass("menuopen");
      resetDropdowns(); // Reset dropdowns to default state
    }
  });
});

// Navbar End............................

// Navbar header Add to Cart Sidebar Js Start...................
function toggleCart() {
  const cartSidebar = document.getElementById("cartSidebar");
  const overlay = document.getElementById("overlay_cart");
  cartSidebar.classList.toggle("active");
  overlay.classList.toggle("active");
}
// Quantity...
function updateQuantity(action, quantityInput) {
  let currentQuantity = parseInt(quantityInput.value);

  if (action === "increase") {
    currentQuantity += 1; // Increase quantity by 1
  } else if (action === "decrease" && currentQuantity > 1) {
    currentQuantity -= 1;
  }

  quantityInput.value = currentQuantity;

  // Find the quantity display element within the same container and update it
  const displayElement = quantityInput
    .closest(".price_container")
    .querySelector(".quantity");
  displayElement.innerText = currentQuantity;
}

// Event listeners for the quantity buttons
document.querySelectorAll(".btn-increase, .btn-decrease").forEach((button) => {
  button.addEventListener("click", function () {
    const action = this.classList.contains("btn-increase")
      ? "increase"
      : "decrease";
    // Locate the quantity input field within the same container as the button
    const quantityInput =
      this.closest(".wrap").querySelector(".quantity-input");
    updateQuantity(action, quantityInput);
  });
});
// Navbar header Add to Cart Sidebar Js End...................
