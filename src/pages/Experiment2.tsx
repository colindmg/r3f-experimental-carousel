import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Carousel from "../components/Carousel";

const Experiment2 = () => {
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
            imageSize={[2, 0.4]}
            gap={0.1}
            position={[2.5, 0, 0]}
            curveFrequency={0.3}
            curveStrength={-1.2}
            wheelFactor={0.5}
            wheelDirection={-1}
          />
          <Carousel
            imageSize={[2, 0.4]}
            gap={0.1}
            position={[-2.5, 0, 0]}
            curveFrequency={0.3}
            curveStrength={1.2}
            wheelFactor={0.5}
            wheelDirection={-1}
          />

          <Carousel
            imageSize={[1, 1.5]}
            gap={0.05}
            position={[0, 0, 0]}
            curveFrequency={0}
            curveStrength={0}
            wheelFactor={0.25}
            wheelDirection={1}
          />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default Experiment2;
