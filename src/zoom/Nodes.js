import { Circle } from "@react-three/drei";
import { useState } from "react";

const Nodes = ({ position = [0, 0, 0], rest }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <Circle
      args={[4, 50]}
      position={position}
      onClick={() => setClicked(!clicked)}
      {...rest}
    >
      <meshStandardMaterial color={clicked ? "yellow" : "hotpink"} />
    </Circle>
  );
};

export default Nodes;
