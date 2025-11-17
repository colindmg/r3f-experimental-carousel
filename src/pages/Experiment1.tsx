import { Canvas } from "@react-three/fiber";
import Carousel from "../components/Carousel";

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
      camera={{
        position: [0, 0, 3],
      }}
    >
      {/* <OrbitControls /> */}
      <Carousel imageSize={[1, 1]} gap={0.1} />
    </Canvas>
  );
};

export default Experiment1;
