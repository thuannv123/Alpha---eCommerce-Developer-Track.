$(document).ready(function () {
  $(".product_tab-block").click(function () {
    $(this).toggleClass("active");
  });
  $(".product-lymph-ingredient").click(function (e) {
    e.stopPropagation();
    $(this).find(".product_lymph-ingr-content").toggleClass("active");
  });
  $(".close-btn").click(function () {
    $(".iframe").toggleClass("active");
  });
});
