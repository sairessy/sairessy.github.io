$(document).ready(() => {
  $("header nav a:nth-child(1), .arrow").click(() => {
    $("body, html").animate({ scrollTop: innerHeight + 100 });
  });

  $("header nav a:nth-child(2)").click(() => {
    $("body, html").animate({ scrollTop: 2 * innerHeight + 100 });
  });

  $("header nav a:nth-child(3)").click(() => {
    $("body, html").animate({ scrollTop: 3 * innerHeight + 100 });
  });

  $("header nav a:nth-child(4)").click(() => {
    $("body, html").animate({ scrollTop: 4 * innerHeight + 100 });
  });

  $("header nav a:nth-child(5)").click(() => {
    $("body, html").animate({ scrollTop: 5 * innerHeight + 100 });
  });

  $("header nav a:nth-child(6)").click(() => {
    $("body, html").animate({ scrollTop: 6 * innerHeight + 100 });
  });

  $(".gotop").click(() => {
    $("body, html").animate({ scrollTop: 0 });
  });

  $(window).scroll((e) => {
    if (scrollY > 60) {
      $(".gotop").css({ transform: "scale(1)" });
    } else {
      $(".gotop").css({ transform: "scale(0)" });
    }
  });
});
