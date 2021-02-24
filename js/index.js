!(function ($) {
  "use strict";

  $(window).on("load", function () {
    // On-scroll animations
    AOS.init({
      duration: 1000,
      mirror: true,
      once: false,
    });
  });

  // Will not reload the page when a nav-link is clicked or tapped
  $(document).on("click", ".nav-link, .dropdown-item, .learn-more, .social-link", function (event) {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      event.preventDefault();
    }
  });

  // Changes navigation bar's color when scrolled
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".navbar").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
    }
  });

  // Side navigation
  $(".navbar-toggler").on("click", function () {
    $(".sidebar").addClass("active");
  });

  $(".exit").on("click", function () {
    $(".sidebar, .sub-menu, .headset-and-audio").removeClass("active");
  });

  // Products menu
  $(".products").on("click", function () {
    $(".sub-menu").addClass("active");
  });

  $(".products-back").on("click", function () {
    $(".sub-menu").removeClass("active");
  });

  // Headset & Audio menu
  $(".h-a-a").on("click", function () {
    $(".headset-and-audio").addClass("active");
  });

  $(".back").on("click", function () {
    $(".headset-and-audio").removeClass("active");
  });

  // Disables saving of images
  $("img, a").on("dragstart", function (event) {
    event.preventDefault();
  });

  // Disbles right click on images
  $("body").on("contextmenu", "img", function () {
    return false;
  });

  // Smooth mousewheel and scroll
  SmoothScroll({
    // Scrolling Core
    animationTime: 1000, // [ms]
    stepSize: 15, // [px]

    // Acceleration
    accelerationDelta: 50,
    accelerationMax: 5,

    // Keyboard Settings
    keyboardSupport: true, // Option
    arrowScroll: 15, // [px]

    // Pulse (less tweakable)
    // Ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 5,
    pulseNormalize: 1,

    // Other
    touchpadSupport: true, // Ignore touchpad by default
    fixedBackground: true,
    excluded: "",
  });

  // Swiper
  const mySwiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    slidesPerView: 1,
    pagination: {
      clickable: true,
      el: ".swiper-pagination",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
    watchOverflow: true,
  });

  // Venobox
  $(".venobox").venobox({
    closeColor: "#00ff00",
    overlayColor: "rgba(0, 0, 0, 0.50)",
    spinColor: "#00ff00",
    spinner: "rotating-plane",
  });

  // Form
  // $("form").submit(function (event) {
  //   event.preventDefault();
  // });
})(jQuery);
