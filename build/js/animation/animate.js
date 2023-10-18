$(document).ready(function () {
  $(window).scroll(function () {
    var windowHeight = $(window).height();
    var scrollPos = $(window).scrollTop();
    $(".fade-in-element").each(function () {
      var offsetTop = $(this).offset().top;
      if (scrollPos > offsetTop - windowHeight + 200) {
        $(this).addClass("visible");
      }
    });
  });
});
