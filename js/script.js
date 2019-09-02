$(function () {
  let animationName = "animated jackInTheBox";
  let animationEnd = "animationend";

  $(".header__logo-block").on("click", function() {
    $(".header__img").addClass(animationName).one(animationEnd, function() {
      $(this).removeClass(animationName);
    });
  });

  $(".first-block").on("click", function () {
    $(".fa-mobile-alt").addClass(animationName).one(animationEnd, function () {
      $(this).removeClass(animationName);
    });
  });

  $(".second-block").on("click", function () {
    $(".fa-lemon").addClass(animationName).one(animationEnd, function () {
      $(this).removeClass(animationName);
    });
  });

  $(".third-block").on("click", function () {
    $(".fa-font-awesome-flag").addClass(animationName).one(animationEnd, function () {
      $(this).removeClass(animationName);
    });
  });

  $(".fourth-block").on("click", function () {
    $(".fa-code").addClass(animationName).one(animationEnd, function () {
      $(this).removeClass(animationName);
    });
  });

  $(".fifth-block").on("click", function () {
    $(".fa-envelope").addClass(animationName).one(animationEnd, function () {
      $(this).removeClass(animationName);
    });
  });

  $(".sixth-block").on("click", function () {
    $(".fa-file-download").addClass(animationName).one(animationEnd, function () {
      $(this).removeClass(animationName);
    });
  });

});