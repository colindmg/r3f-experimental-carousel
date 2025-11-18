import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Carousel from "../components/Carousel";

const Experiment5 = () => {
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
          <group position-y={0.4}>
            <Carousel
              position={[0, -0.8, 0]}
              imageSize={[1, 1]}
              gap={0.05}
              wheelFactor={0.4}
              direction={"horizontal"}
              curveFrequency={0.9}
              curveStrength={0.5}
            />

            <Carousel
              position={[0, 0, 0]}
              imageSize={[1, 1]}
              gap={0.05}
              wheelFactor={0.3}
              direction={"horizontal"}
              curveFrequency={1}
              curveStrength={0.4}
            />

            <Carousel
              position={[0, 0.8, 0]}
              imageSize={[1, 1]}
              gap={0.05}
              wheelFactor={0.2}
              direction={"horizontal"}
              curveFrequency={1.1}
              curveStrength={0.3}
            />
          </group>

        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default Experiment5;
