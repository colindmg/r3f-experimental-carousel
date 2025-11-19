import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Carousel from "../components/Carousel";

const Experiment6 = () => {
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

          <group rotation-z={Math.PI/4}>
            <Carousel
              imageSize={[2, 1.1]}
              gap={0.05}
              position={[-1.3, 0, 0]}
              curveFrequency={0.4}
              curveStrength={1.2}
              wheelFactor={0.1}
              wheelDirection={1}
            />
            <Carousel
              imageSize={[0.3, 0.4]}
              gap={0}
              wheelFactor={0.2}
              position={[-2.3, 0, 0]}
              curveFrequency={0.4}
              curveStrength={7.5}
              wheelDirection={-1}
            />
            <Carousel
              imageSize={[0.3, 0.4]}
              gap={0}
              wheelFactor={0.2}
              position={[-0.4, 0, 0]}
              curveFrequency={0.4}
              curveStrength={7.5}
              wheelDirection={-1}
            />
          </group>

          <group rotation-z={Math.PI/4}>
            <Carousel
              imageSize={[2, 1.1]}
              gap={0.05}
              position={[1.3, 0, 0]}
              curveFrequency={0.4}
              curveStrength={-1.2}
              wheelFactor={0.1}
              wheelDirection={-1}
            />
            <Carousel
              imageSize={[0.3, 0.4]}
              gap={0}
              wheelFactor={0.2}
              position={[2.3, 0, 0]}
              curveFrequency={0.4}
              curveStrength={-7.5}
              wheelDirection={1}
            />
            <Carousel
              imageSize={[0.3, 0.4]}
              gap={0}
              wheelFactor={0.2}
              position={[0.4, 0, 0]}
              curveFrequency={0.4}
              curveStrength={-7.5}
              wheelDirection={1}
            />
          </group>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default Experiment6;
