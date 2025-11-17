import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import GLImage from "../components/GLImage";

const Experiment1 = () => {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <OrbitControls />
      <GLImage
        scale={[1, 1, 1]}
        yOffset={0}
        geometry={new THREE.PlaneGeometry(1, 1)}
      />
    </Canvas>
  );
};

export default Experiment1;
