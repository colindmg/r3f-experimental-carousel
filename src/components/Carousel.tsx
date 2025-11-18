import { useFrame } from "@react-three/fiber";
import { useLenis } from "lenis/react";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { IMAGE_LIST } from "../constants";
import { mod } from "../utils";
import GLImage from "./GLImage";

interface CarouselProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  imageSize: [number, number];
  gap: number;
  wheelFactor?: number;
  wheelDirection?: 1 | -1;
  curveStrength?: number;
  curveFrequency?: number;
  direction?: "vertical" | "horizontal";
}

const Carousel = ({
  position,
  rotation,
  imageSize,
  gap,
  wheelFactor = 1,
  wheelDirection = 1,
  curveStrength = 0,
  curveFrequency = 0,
  direction = "vertical",
}: CarouselProps) => {
  const imageRefs = useRef<THREE.Mesh[]>([]);

  const planeGeometry = useMemo(() => {
    return new THREE.PlaneGeometry(1, 1, 16, 16);
  }, []);

  const totalHeight =
    IMAGE_LIST.length * gap + IMAGE_LIST.length * imageSize[1];
  const totalWidth = IMAGE_LIST.length * gap + IMAGE_LIST.length * imageSize[0];

  useFrame(() => {
    if (direction === "vertical") {
      imageRefs.current.forEach((ref) => {
        if (!ref) return;
        ref.position.y =
          mod(ref.position.y + totalHeight / 2, totalHeight) - totalHeight / 2;
      });
    } else {
      imageRefs.current.forEach((ref) => {
        if (!ref) return;
        ref.position.x =
          mod(ref.position.x + totalWidth / 2, totalWidth) - totalWidth / 2;
      });
    }
  });

  useLenis(({ velocity }) => {
    if (direction === "vertical") {
      imageRefs.current.forEach((ref) => {
        if (ref) {
          ref.position.y -= velocity * 0.005 * wheelFactor * wheelDirection;
          // @ts-expect-error ignore
          ref.material.uniforms.uScrollSpeed.value =
            velocity * 0.005 * wheelFactor * wheelDirection;
        }
      });
    } else {
      imageRefs.current.forEach((ref) => {
        if (ref) {
          ref.position.x += velocity * 0.005 * wheelFactor * wheelDirection;
          // @ts-expect-error ignore
          ref.material.uniforms.uScrollSpeed.value =
            -velocity * 0.005 * wheelFactor * wheelDirection;
        }
      });
    }
  });

  return (
    <group position={position || [0, 0, 0]} rotation={rotation || [0, 0, 0]}>
      {IMAGE_LIST.map((url, index) => (
        <GLImage
          key={index}
          imageUrl={url}
          scale={[imageSize[0], imageSize[1], 1]}
          geometry={planeGeometry}
          curveStrength={curveStrength}
          curveFrequency={curveFrequency}
          position={direction === "vertical" ?[0, index * (imageSize[1] + gap), 0] : [index * (imageSize[0] + gap), 0, 0]}
          ref={(el) => {
            if (el) imageRefs.current[index] = el;
          }}
          direction={direction}
        />
      ))}
    </group>
  );
};

export default Carousel;
