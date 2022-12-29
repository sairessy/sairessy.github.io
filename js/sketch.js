const lm = ["Criar", "Inovar", "Optimizar"];

let balls = [];

const scientists = [
  { name: "Newton", origin: "England" },
  { name: "Pascal", origin: "France" },
  { name: "Heartz", origin: "France" },
  { name: "Lagrange", origin: "Italy" },
  { name: "Lavosier", origin: "France" },
  { name: "Tesla", origin: "France" },
  { name: "Leibniz", origin: "German" },
];

let canvas,
  sound,
  button,
  slider,
  span,
  vol = 0.09;

function preload() {
  sound = loadSound("assets/sound/sia_snowflake.mp3");
}

function setup() {
  canvas = createCanvas(innerWidth, innerHeight + 100);
  canvas.parent(document.querySelector(".sketch"));
  button = createButton("<i class='la la-play'></i>");
  button.position(width - 100, height * 0.5);

  slider = createSlider(0, 1, vol, 0.01);
  slider.position(width - 135, height * 0.5 - 100);
  slider.style("cursor: pointer");
  slider.style("accent-color: #FF1744");
  slider.style("transform: rotate(-90deg)");
  slider.style("width: 100px");
  slider.style("height: 6px");

  span = createSpan("Sia - Snowflake");
  span.position(width - 135, height * 0.5 + 100);
  span.style("color: #FF1744");
  span.style("transform: rotate(90deg)");

  sound.setLoop(true);
  sound.setVolume(vol);

  button.mousePressed(mp);

  for (var i = 0; i < 20; i++) {
    balls.push(new Ball(random(0, width), random(-500, -100)));
  }
}

function draw() {
  background("#111");
  vol = slider.value();

  balls.forEach((ball) => {
    ball.init();
  });

  sound.setVolume(vol);

  fill("#FF1744");
  textSize(16);
  text(round(vol * 100) + "%", width - 95, height * 0.5 - 200);
}

function mp() {
  if (!sound.isPlaying()) {
    sound.play();
    button.html("<i class='la la-stop'></i>");
  } else {
    sound.stop();
    button.html("<i class='la la-play'></i>");
  }
}
