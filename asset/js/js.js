$(document).ready(function () {
  const images = [
    "https://trysculptique.com/cdn/shop/files/LymoPDPImagesArtboard1_8e287aa1-576e-42b1-9a87-ce2fcdaded3a.jpg?v=1760103674?1",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard2.jpg?v=1760103684?2",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684?3",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard4.jpg?v=1760103685?4",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_1.jpg?v=1760103685?5",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_2.jpg?v=1760103685?6",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard6.jpg?v=1760103685?7",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard8.jpg?v=1760103685?8",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard9.jpg?v=1760103684?9",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard10.jpg?v=1760103684?10",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard12.jpg?v=1760103685?11",
    "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard13.jpg?v=1760103685?12",
  ];

  images.forEach((img) => {
    $(".my-slider").append(`
        <div class="main_product-image-box">
          <img src="${img}" />
        </div>
      `);
  });

  $(".my-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
  });

  $(".product_tab-block").click(function () {
    $(this).toggleClass("active");
  });
  $(".product-lymph-ingredient").click(function (e) {
    e.stopPropagation();
    $(this).find(".product_lymph-ingr-content").toggleClass("active");
  });
});
