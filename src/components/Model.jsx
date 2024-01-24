import React from "react";
import { Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Scene from "./Scene";
import { Vector3 } from "three";

const Model = () => {
  const Rig = () => {
    const { camera, mouse } = useThree();
    const vec = new Vector3();

    useFrame(() => {
      camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.05);
      camera.lookAt(0, 0, 1);
    });

    return null;
  };

  return (
    <div className=" flex items-center justify-center">
      <Canvas
        style={{ width: "2000px", height: "500px" }}
        className=""
        camera={{ position: [0, 0, 6] }}
      >
        <Suspense fallback={null}>
          <Scene scale={1.5} />
        </Suspense>
        <Rig />
      </Canvas>
    </div>
  );
};

export default Model;
