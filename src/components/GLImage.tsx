import { useTexture } from "@react-three/drei";
import { forwardRef, useMemo, useRef } from "react";
import * as THREE from "three";
import imageFragmentShader from "../shaders/image/fragment.glsl?raw";
import imageImageVertexShader from "../shaders/image/vertex.glsl?raw";

interface GLImageProps {
  imageUrl?: string;
  scale: [number, number, number];
  position?: [number, number, number];
  displacementStrength?: number;
  geometry: THREE.PlaneGeometry;
}

const GLImage = forwardRef<THREE.Mesh, GLImageProps>(
  (
    {
      imageUrl = "./images/img1.webp",
      scale,
      position = [0, 0, 0],
      displacementStrength,
      geometry,
    },
    forwardedRef
  ) => {
    const localRef = useRef<THREE.Mesh>(null);
    const imageRef = forwardedRef || localRef;
    const texture = useTexture(imageUrl);

    const imageSizes = useMemo(() => {
      if (!texture) return [1, 1];
      // @ts-expect-error ignore
      return [texture.image.width, texture.image.height];
    }, [texture]);

    const shaderArgs = useMemo(
      () => ({
        uniforms: {
          uTexture: { value: texture },
          uScrollSpeed: { value: 0.0 },
          uPlaneSizes: { value: new THREE.Vector2(scale[0], scale[1]) },
          uImageSizes: {
            value: new THREE.Vector2(imageSizes[0], imageSizes[1]),
          },

          uDisplacementStrength: { value: displacementStrength || 0 },
        },
        vertexShader: imageImageVertexShader,
        fragmentShader: imageFragmentShader,
      }),
      [texture, displacementStrength, scale, imageSizes]
    );

    return (
      <mesh position={position} ref={imageRef} scale={scale}>
        <primitive object={geometry} attach="geometry" />
        <shaderMaterial {...shaderArgs} />
      </mesh>
    );
  }
);

export default GLImage;
