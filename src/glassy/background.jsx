import { Box } from "@react-three/drei";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import useMeasure from "react-use-measure";
import polyfill from "@juggle/resize-observer";
import { useRef } from "react";

const MyBackground = ({ boxSize, ratio }) => {
  const box = useRef();
  let color = `hsl(${Math.floor(Math.random() * 360)},50%,20%)`;
  let time = Math.floor(Math.random() * 360);
  useFrame((state, delta, xrFrame) => {
    if (time >= 1) time = 0;
    time += delta * 0.05;
    state.scene.background = new THREE.Color(
      `hsl(${Math.floor(time * 360)},50%,20%)`
    );
    state.scene.fog = new THREE.Fog(
      `hsl(${Math.floor(time * 360)},50%,20%)`,
      1,
      100
    );
  });
  return <></>;
};

const Scene = ({ bounds }) => {
  const ratio = bounds.width / bounds.height;
  const boxSize = 5;

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <MyBackground boxSize={boxSize} ratio={ratio} />
    </Canvas>
  );
};

const Background = ({ children }) => {
  const [ref, bounds] = useMeasure({ polyfill });
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div
          ref={ref}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
          }}
        >
          <Scene bounds={bounds} />
        </div>
        <div
          className="main-content"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Background;
