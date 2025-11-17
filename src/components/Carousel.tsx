import { useFrame } from "@react-three/fiber";
import { useLenis } from "lenis/react";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { IMAGE_LIST } from "../constants";
import { mod } from "../utils";
import GLImage from "./GLImage";

interface CarouselProps {
  position?: [number, number, number];
  imageSize: [number, number];
  gap: number;
}

const Carousel = ({ position, imageSize, gap }: CarouselProps) => {
  const imageRefs = useRef<THREE.Mesh[]>([]);

  const planeGeometry = useMemo(() => {
    return new THREE.PlaneGeometry(1, 1, 16, 16);
  }, []);

  const totalHeight =
    IMAGE_LIST.length * gap + IMAGE_LIST.length * imageSize[1];

  useFrame(() => {
    imageRefs.current.forEach((ref) => {
      if (!ref) return;
      ref.position.y =
        mod(ref.position.y + totalHeight / 2, totalHeight) - totalHeight / 2;
    });
  });

  useLenis(({ velocity }) => {
    imageRefs.current.forEach((ref) => {
      if (ref) {
        ref.position.y -= velocity * 0.005;
        // @ts-expect-error ignore
        ref.material.uniforms.uScrollSpeed.value = velocity * 0.005;
      }
    });
  });

  return (
    <group position={position || [0, 0, 0]}>
      {IMAGE_LIST.map((url, index) => (
        <GLImage
          key={index}
          imageUrl={url}
          scale={[imageSize[0], imageSize[1], 1]}
          geometry={planeGeometry}
          curveStrength={-0.5}
          curveFrequency={2}
          position={[0, index * (imageSize[1] + gap), 0]}
          ref={(el) => {
            if (el) imageRefs.current[index] = el;
          }}
        />
      ))}
    </group>
  );
};

export default Carousel;
