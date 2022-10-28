import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  let gotDefaultOrientation = false;
  let defX, defY, defZ;

  useFrame(
    (state, delta) => {
      try {
        if (!gotDefaultOrientation) {
          window.addEventListener(
            "deviceorientation",
            (event) => {
              const rotateDegrees = event.alpha; // alpha: rotation around z-axis
              const leftToRight = event.gamma; // gamma: left to right
              const frontToBack = event.beta; // beta: front back motion
              defX = frontToBack / 112.5;
              defY = leftToRight / 112.5;
              defZ = rotateDegrees / 112.5;
              gotDefaultOrientation = true;
            },
            true
          );
        } else {
          window.addEventListener(
            "deviceorientation",
            (event) => {
              const rotateDegrees = event.alpha; // alpha: rotation around z-axis
              const leftToRight = event.gamma; // gamma: left to right
              const frontToBack = event.beta; // beta: front back motion
              mesh.current.rotation.x = frontToBack / 112.5 - defX;
              mesh.current.rotation.y = leftToRight / 112.5 - defY;
              mesh.current.rotation.z = rotateDegrees / 112.5 - defZ;
              // handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
            },
            true
          );
        }
      } catch (err) {
        console.log(err);
      }
    }
    // mesh.current.rotation.x += 0.01
  );
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[2, 3, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export default function Compass() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls />
      <ambientLight />
      <axesHelper args={[5]} />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  );
}
