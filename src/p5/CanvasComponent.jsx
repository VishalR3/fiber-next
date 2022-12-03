import Sketch from "react-p5";

const CanvasComponent = () => {
  let numBalls = 13;
  let spring = 0.05;
  let gravity = 0.03;
  let friction = -2;
  let balls = [];
  const preload = () => {
    numBalls = 20;
    spring = 0.5;
    gravity = -0.03;
    friction = -0.9;
    balls = [];
  };
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    for (let i = 0; i < numBalls; i++) {
      balls[i] = new Ball(
        p5.random(p5.width),
        p5.random(p5.height),
        p5.random(30, 70),
        i,
        balls
      );
    }
    p5.noStroke();
    p5.fill(255, 204);
  };

  const draw = (p5) => {
    p5.background(40);
    balls.forEach((ball) => {
      ball.collide();
      ball.move(p5);
      ball.display(p5);
    });
  };
  const mouseClicked = (p5) => {
    balls.push(
      new Ball(p5.mouseX, p5.mouseY, p5.random(30, 70), balls.length, balls)
    );
  };
  const doubleClicked = (p5) => {
    balls.forEach((ball) => {
      ball.gainVelocity();
    });
  };
  class Ball {
    constructor(xin, yin, din, idin, oin) {
      this.x = xin;
      this.y = yin;
      this.vx = 0;
      this.vy = 0;
      this.diameter = din;
      this.id = idin;
      this.others = oin;
      this.color = [
        Math.random() * 255,
        Math.random() * 255,
        Math.random() * 255,
      ];
    }

    collide() {
      for (let i = this.id + 1; i < numBalls; i++) {
        // console.log(others[i]);
        let dx = this.others[i].x - this.x;
        let dy = this.others[i].y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let minDist = this.others[i].diameter / 2 + this.diameter / 2;
        //   console.log(distance);
        //console.log(minDist);
        if (distance < minDist) {
          //console.log("2");
          let angle = Math.atan2(dy, dx);
          let targetX = this.x + Math.cos(angle) * minDist;
          let targetY = this.y + Math.sin(angle) * minDist;
          let ax = (targetX - this.others[i].x) * spring;
          let ay = (targetY - this.others[i].y) * spring;
          this.vx -= ax;
          this.vy -= ay;
          this.others[i].vx += ax;
          this.others[i].vy += ay;
        }
      }
    }

    move(p5) {
      this.vy += gravity;
      this.x += this.vx;
      this.y += this.vy;
      if (this.x + this.diameter / 2 > p5.width) {
        this.x = p5.width - this.diameter / 2;
        this.vx *= friction;
      } else if (this.x - this.diameter / 2 < 0) {
        this.x = this.diameter / 2;
        this.vx *= friction;
      }
      if (this.y + this.diameter / 2 > p5.height) {
        this.y = p5.height - this.diameter / 2;
        this.vy *= friction;
      } else if (this.y - this.diameter / 2 < 0) {
        this.y = this.diameter / 2;
        this.vy *= friction;
      }
    }

    gainVelocity() {
      this.vx += Math.random() * 20;
      this.vy += Math.random() * 20;
    }

    display(p5) {
      p5.fill(this.color);
      p5.ellipse(this.x, this.y, this.diameter, this.diameter);
    }
  }
  return (
    <Sketch
      preload={preload}
      setup={setup}
      draw={draw}
      mouseClicked={mouseClicked}
      doubleClicked={doubleClicked}
    />
  );
};

export default CanvasComponent;
