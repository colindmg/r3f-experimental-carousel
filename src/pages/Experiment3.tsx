import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Carousel from "../components/Carousel";

const Experiment3 = () => {
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
          rotation: [0, 0, Math.PI / 5],
        }}
      >
        <Suspense fallback={null}>
          <Carousel
            imageSize={[0.8, 1]}
            gap={0}
            wheelFactor={0.2}
            position={[-1.2, 0, 0]}
            curveFrequency={0.4}
            curveStrength={0.9}
          />
          <Carousel
            imageSize={[0.8, 1]}
            gap={0}
            wheelFactor={0.3}
            position={[-0.6, 0, 0]}
            curveFrequency={0.4}
            curveStrength={0.6}
          />
          <Carousel imageSize={[0.8, 1]} gap={0} wheelFactor={0.4} />
          <Carousel
            imageSize={[0.8, 1]}
            gap={0}
            wheelFactor={0.5}
            position={[0.6, 0, 0]}
            curveFrequency={0.4}
            curveStrength={-0.6}
          />
          <Carousel
            imageSize={[0.8, 1]}
            gap={0}
            wheelFactor={0.6}
            position={[1.2, 0, 0]}
            curveFrequency={0.4}
            curveStrength={-0.9}
          />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default Experiment3;
