class Ball {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.r = random(4, 8);
		this.speed = 0.1;
		this.color = "#FF1744"; 
	}

	init() {
		fill(this.color);
		noStroke();
		ellipse(this.x, this.y, this.r, this.r); 
		this.fall();
	}

	fall() {
		this.y+=this.speed*this.r;
		if(this.y > width) {
			this.reset();
		}
	}

	reset() {
		this.y = -this.r;
		this.x = random(0, width);
		this.r = random(2, 10);
	}
}