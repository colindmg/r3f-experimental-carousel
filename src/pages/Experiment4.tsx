import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Carousel from "../components/Carousel";

const Experiment4 = () => {
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
            imageSize={[0.3, 1]}
            gap={0}
            wheelFactor={0.4}
            position={[0, 0, 0]}
            curveFrequency={0.5}
            curveStrength={-1}
          />
          <Carousel
            imageSize={[0.3, 1]}
            gap={0}
            wheelFactor={0.3}
            position={[0, 0, 0]}
            rotation={[0, 0, Math.PI / 5]}
            curveStrength={1}
            curveFrequency={0.5}
          />
          <Carousel
            imageSize={[0.3, 1]}
            gap={0}
            wheelFactor={0.2}
            position={[2, 0, 0]}
            rotation={[0, 0, -Math.PI / 6]}
            curveStrength={1.4}
            curveFrequency={0.5}
          />
          <Carousel
            imageSize={[0.3, 1]}
            gap={0}
            wheelFactor={0.5}
            position={[-2, 0, 0]}
            rotation={[0, 0, -Math.PI / 8]}
            curveStrength={1.4}
            curveFrequency={0.5}
          />
          <Carousel
            imageSize={[0.3, 1]}
            gap={0}
            wheelFactor={0.35}
            position={[2, 0, 0]}
            rotation={[0, 0, Math.PI / 8]}
            curveStrength={-1.8}
            curveFrequency={0.3}
          />
          <Carousel
            imageSize={[0.3, 1]}
            gap={0}
            wheelFactor={0.45}
            position={[-1.7, 0, 0]}
            rotation={[0, 0, Math.PI / 9]}
            curveStrength={-1.8}
            curveFrequency={0.3}
          />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default Experiment4;
