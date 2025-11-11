import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

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
      <ambientLight intensity={3} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
};

export default Experiment1;
