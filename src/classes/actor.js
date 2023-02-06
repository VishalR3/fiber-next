class Actor {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.mass = 1;
    this.radius = 10;
    this.color = "white";
  }
  update() {
    this.vx += this.ax;
    this.vy += this.ay;
    this.x += this.vx;
    this.y += this.vy;
  }
  display(p5) {
    p5.fill(this.color);
    p5.circle(this.x, this.y, this.radius);
  }
  applyForce(force) {
    this.ax += force.x / this.mass;
    this.ay += force.y / this.mass;
  }
  checkEdges(p5) {
    if (this.x < 0) {
      this.x = p5.width + Math.random(-1, 2);
      this.y = Math.random() * p5.height;
    }
  }
}

export default Actor;
