import { Line, MapControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Nodes from "../../src/zoom/Nodes";

const Zoom = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <Canvas
      orthographic
      camera={{ position: [0, 0, 50], zoom: 10, up: [0, 0, 1], far: 10000 }}
      style={{ height: "100vh" }}
    >
      <color attach="background" args={["#333"]} />
      <MapControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Nodes />
      <Nodes position={[-20, 0, 0]} />
      <Nodes position={[-10, 20, 0]} />
      <Nodes position={[20, 20, 0]} />
      <Nodes position={[40, 0, 0]} />
      <Nodes position={[30, -20, 0]} />
      <Nodes position={[10, -30, 0]} />
      <Line
        points={[
          [0, 0, 0],
          [-20, 0, 0],
          [-10, 20, 0],
          [20, 20, 0],
          [40, 0, 0],
          [30, -20, 0],
          [10, -30, 0],
        ]}
        color={"red"}
      />
    </Canvas>
  );
};

export default Zoom;
