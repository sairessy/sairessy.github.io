class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(4, 8);
    this.speed = 0.1;
    this.color = "#FF174455";
    this.sci = Math.round(Math.random() * (scientists.length - 1));
  }

  init() {
    fill("#FF174422");
    noStroke();
    ellipse(this.x, this.y, this.r, this.r);
    // line(this.x, this.y, this.x + 50, this.y - 150);
    // line(this.x + 50, this.y - 150, this.x + 100, this.y - 150);
    // stroke(this.color);
    // text(
    //   `${scientists[this.sci].name} (${round(this.y)})`,
    //   this.x + 110,
    //   this.y - 120
    // );
    // text(`🏳 ${scientists[this.sci].origin})`, this.x + 110, this.y - 90);
    // rect(this.x + 100, this.y - 150, 200, 80);
    this.fall();
  }

  fall() {
    this.y += this.speed * this.r;
    if (this.y > width) {
      this.reset();
    }
  }

  reset() {
    this.y = -this.r;
    this.x = random(0, width);
    this.r = random(2, 10);
    this.sci = Math.round(Math.random() * (scientists.length - 1));
  }
}
