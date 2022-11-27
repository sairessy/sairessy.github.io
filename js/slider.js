$(document).ready(() => {
  let x = -100;
  let w = 300;

  $(".controller i:nth-child(2)").click(() => {
    $(".image").css({ transform: "scale(0.6)" });

    setTimeout(() => {
      $(".image").css({ transform: "scale(1)" });
    }, 400);

    if (x > -w) {
      $(".images-container").animate({
        left: `${x}%`,
      });
      x -= 100;
    }
  });

  $(".controller i:nth-child(1)").click(() => {
    $(".image").css({ transform: "scale(0.6)" });
    setTimeout(() => {
      $(".image").css({ transform: "scale(1)" });
    }, 400);

    if (x < -100) {
      x += 100;
      $(".images-container").animate({
        left: `${x + 100}%`,
      });
    }
  });
});
