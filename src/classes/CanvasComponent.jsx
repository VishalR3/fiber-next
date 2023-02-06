import Sketch from "react-p5";
import Actor from "./actor";
import Character from "./character";

const CanvasComponent = () => {
  let actors = [];
  let isKeyDown = false;
  let character = new Character();
  character.x = 100;
  character.y = 100;
  character.width = 100;
  character.height = 100;
  character.color = "red";
  const preload = () => {};
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(p5.windowWidth / 2, p5.windowHeight / 2).parent(
      canvasParentRef
    );
    for (let i = 0; i < 100; i++) {
      let a = new Actor();
      a.x = p5.random(p5.width);
      a.y = p5.random(p5.height);
      a.vx = -1;
      // a.vx = p5.random(-1, 1);
      // a.vy = p5.random(-1, 1);
      a.radius = p5.random(10, 20);
      a.color = p5.color(p5.random(255), p5.random(255), p5.random(255));
      actors.push(a);
    }
  };

  const draw = (p5) => {
    p5.background(40);
    for (let i = 0; i < actors.length; i++) {
      actors[i].update();
      actors[i].display(p5);
      actors[i].checkEdges(p5);
    }
    character.display(p5);
    character.update();
    character.checkEdges(p5);
    if (isKeyDown) {
      character.move(p5, isKeyDown);
    }
  };
  const mouseClicked = (p5) => {};
  const doubleClicked = (p5) => {};
  const keyPressed = (p5) => {
    isKeyDown = p5.keyCode;
  };
  const keyReleased = (p5) => {
    isKeyDown = false;
  };

  return (
    <Sketch
      preload={preload}
      setup={setup}
      draw={draw}
      mouseClicked={mouseClicked}
      doubleClicked={doubleClicked}
      keyPressed={keyPressed}
      keyReleased={keyReleased}
    />
  );
};

export default CanvasComponent;
