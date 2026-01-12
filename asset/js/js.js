$(document).ready(function () {
  $(document).on("click", ".product-selector_block", function () {
    const $container = $(this).closest(".product_selector-content");
    const $blocks = $container.find(".product-selector_block");

    $container.find(".product-selector_block").removeClass("is-selected");
    $(this).addClass("is-selected");

    syncFill($container, $blocks.index(this) + 1);
  });
  function syncFill($container, idx) {
    const $section = $container.parent();
    const $fills = $section.find(".product_fill");
    $fills.addClass("hide");
    $fills.filter(`[data="${idx}"]`).removeClass("hide");
  }

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

  $(".product_selector-content").each(function () {
    const $container = $(this);
    const $blocks = $container.find(".product-selector_block");

    $blocks.removeClass("is-selected");
    $blocks.eq(1).addClass("is-selected");

    syncFill($container, 2);
  });
  $(".pdp-main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".pdp-thumbs",
    adaptiveHeight: true,
  });

  $(".pdp-thumbs").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".pdp-main",
    focusOnSelect: true,
    arrows: false,
    dots: false,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } },
    ],
  });
});
