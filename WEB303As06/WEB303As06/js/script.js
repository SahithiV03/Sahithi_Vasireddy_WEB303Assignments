$(document).ready(function () {
  $(".accordian a").click(function (e) {
    e.preventDefault();
    const parent = $(this).parent().parent();

    if (!$(this).hasClass("active")) {
      $(parent).find(".accordian p").slideUp();
      $(parent).find(".accordian a").removeClass("active");
      $(this).next("p").slideToggle();
      $(this).addClass("active");
    } else {
      $(this).next("p").slideToggle();
      $(this).removeClass("active");
    }
  });

  $(".tab-link").click(function (e) {
    e.preventDefault();

    const index = $(this).parent().index() + 1;
    $(".tab-link").removeClass("active");
    $(this).addClass("active");
    $(".tab-data .tab").fadeOut(0);
    $(`.tab-data .tab:nth-child(${index})`).fadeIn();
  });
});
