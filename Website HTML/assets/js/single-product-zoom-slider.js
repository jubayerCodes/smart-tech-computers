$(document).ready(function () {
  // Initialize lightSlider
  $("#lightSlider").lightSlider({
    gallery: true,
    item: 1, // Number of items to display in the main slider
    loop: true,
    slideMargin: 0,
    galleryMargin: 10, // Optional: Adds margin between thumbnails
    thumbItem: 5, // Show 5 thumbnails in the gallery
    
  });

  // Zoom functionality
  $(".zoom_container").hover(
    function () {
      $(this).find(".zoom_box").fadeIn(200); // Show zoom box on hover
    },
    function () {
      $(this).find(".zoom_box").fadeOut(200); // Hide zoom box when not hovering
    }
  );

  // Mousemove for desktop
  $(".zoom_container").mousemove(function (event) {
    var zoomBox = $(this).find(".zoom_box");
    var zoomImg = zoomBox.find("img");

    var offset = $(this).offset();
    var x = event.pageX - offset.left;
    var y = event.pageY - offset.top;

    // Calculate percentage of mouse position
    var xPercent = (x / $(this).width()) * 100;
    var yPercent = (y / $(this).height()) * 100;

    // Set the position of the zoomed image
    zoomImg.css({
      left: -((xPercent / 100) * zoomImg.width() - zoomBox.width() / 2),
      top: -((yPercent / 100) * zoomImg.height() - zoomBox.height() / 2),
    });

    // Set the position of the zoom box
    zoomBox.css({
      top: y - zoomBox.height() / 2 + "px",
      left: x - zoomBox.width() / 2 + "px",
    });
  });

  // Touch events for mobile
  $(".zoom_container").on("touchstart touchmove", function (event) {
    var zoomBox = $(this).find(".zoom_box");
    var zoomImg = zoomBox.find("img");

    var touch = event.originalEvent.touches[0];
    var offset = $(this).offset();
    var x = touch.pageX - offset.left;
    var y = touch.pageY - offset.top;

    // Show zoom box
    zoomBox.fadeIn(200);

    // Calculate percentage of touch position
    var xPercent = (x / $(this).width()) * 100;
    var yPercent = (y / $(this).height()) * 100;

    // Set the position of the zoomed image
    zoomImg.css({
      left: -((xPercent / 100) * zoomImg.width() - zoomBox.width() / 2),
      top: -((yPercent / 100) * zoomImg.height() - zoomBox.height() / 2),
    });

    // Set the position of the zoom box
    zoomBox.css({
      top: y - zoomBox.height() / 2 + "px",
      left: x - zoomBox.width() / 2 + "px",
    });

    event.preventDefault(); // Prevent default behavior
  });

  // Disable touch events on the slider to prevent sliding
  $("#lightSlider").on("touchstart touchmove", function (event) {
    event.stopPropagation(); // Prevent touchstart/touchmove from reaching the slider
  });

  // Hide zoom box on touch end
  $(".zoom_container").on("touchend", function () {
    $(this).find(".zoom_box").fadeOut(200);
  });

  // Prevent default action on slider buttons
  $(".lSAction").on("click", function (event) {
    event.preventDefault(); // Prevent any default actions
  });

  // Automatically display the new slide after click on next or prev
  $(".lSAction").on("click", function () {
    // You may want to add a slight delay to allow the slide transition
    setTimeout(function () {
      $("#lightSlider").lightSlider("refresh"); // Refresh slider to update view
    }, 300); // Adjust time as needed
  });
});

// Slider End................................

// Slider Product Quantity Start..................
function decreaseQuantity() {
  const quantityInput = document.getElementById("quantity");
  let currentValue = parseInt(quantityInput.value) || 1;
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
}

function increaseQuantity() {
  const quantityInput = document.getElementById("quantity");
  let currentValue = parseInt(quantityInput.value) || 1;
  quantityInput.value = currentValue + 1;
}

// Slider Product Quantity End..................



