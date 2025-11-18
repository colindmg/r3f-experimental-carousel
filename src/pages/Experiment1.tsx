import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Carousel from "../components/Carousel";

const Experiment1 = () => {
  return (
    <>
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
        <Suspense fallback={null}>
          <Carousel
            imageSize={[1, 1]}
            gap={0.05}
            curveFrequency={0.4}
            curveStrength={1}
            wheelFactor={0.4}
          />
          <Carousel
            position={[1.1, 0, 0]}
            imageSize={[1, 1]}
            gap={0.05}
            curveFrequency={0.4}
            curveStrength={1}
            wheelFactor={0.5}
            wheelDirection={-1}
          />
          <Carousel
            position={[-1.1, 0, 0]}
            imageSize={[1, 1]}
            gap={0.05}
            curveFrequency={0.4}
            curveStrength={1}
            wheelFactor={0.3}
            wheelDirection={-1}
          />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default Experiment1;
