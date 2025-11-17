import { useMemo, useRef } from "react";
import * as THREE from "three";
import { IMAGE_LIST } from "../constants";
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

  return (
    <group position={position || [0, 0, 0]}>
      {IMAGE_LIST.map((url, index) => (
        <GLImage
          key={index}
          imageUrl={url}
          scale={[imageSize[0], imageSize[1], 1]}
          geometry={planeGeometry}
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
