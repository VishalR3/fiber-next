class Character {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.width = 0;
    this.height = 0;
    this.color = null;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
  }
  display(p5) {
    p5.fill(this.color);
    p5.rect(this.x, this.y, this.width, this.height);
  }
  move(p5, key) {
    if (key === p5.LEFT_ARROW) {
      this.x--;
    } else if (key === p5.RIGHT_ARROW) {
      this.x++;
    } else if (key === p5.UP_ARROW) {
      this.y--;
    } else if (key === p5.DOWN_ARROW) {
      this.y++;
    }
  }

  checkEdges(p5) {
    if (this.x > p5.width - this.width) {
      this.x = p5.width - this.width;
      this.vx *= -1;
    }
    if (this.x < 0) {
      this.x = 0;
      this.vx *= -1;
    }
    if (this.y > p5.height - this.height) {
      this.y = p5.height - this.height;
      this.vy *= -1;
    }
    if (this.y < 0) {
      this.y = 0;
      this.vy *= -1;
    }
  }
}

export default Character;
