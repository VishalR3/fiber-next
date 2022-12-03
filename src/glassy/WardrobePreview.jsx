import { Box, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useState } from "react";
import { Color } from "three";

class Wardrobes {
  constructor() {
    this.count = 3;
  }
  addWardrobe(num) {
    this.count = num;
  }
}

const Section = ({ index, wardrobes }) => {
  const [hovered, setHovered] = useState(false);
  let n = wardrobes.count;
  return (
    <Box
      position={[-n / 2 + 0.5 + index, 0, 0]}
      onPointerOver={(event) => setHovered(true)}
      onPointerOut={(event) => setHovered(false)}
      onClick={(event) => wardrobes.addWardrobe(wardrobes.count + 1)}
    >
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color={hovered ? "yellow" : "hotpink"} />
    </Box>
  );
};

const Sections = ({ wardrobes }) => {
  useFrame((state) => {
    state.scene.background = new Color("hsl(0, 0%, 30%)");
  });
  let list = [];
  for (let i = 0; i < wardrobes.count; i++) {
    list.push(<Section key={i} index={i} wardrobes={wardrobes} />);
  }
  return list;
};
const Scene = () => {
  let wardrobes = new Wardrobes();
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Sections wardrobes={wardrobes} />
    </Canvas>
  );
};

const WardrobePreview = ({ wardrobe }) => {
  return (
    <>
      <div className="wardrobe-preview">
        <Scene />
      </div>
    </>
  );
};
export default WardrobePreview;
