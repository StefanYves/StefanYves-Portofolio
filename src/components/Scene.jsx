import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const group = useRef();

  const { nodes, materials } = useGLTF("/scene.gltf");

  useFrame(({ mouse, viewport }) => {
    const x = (mouse.x * viewport.width) / 3;
    const y = (mouse.y * viewport.height) / 3;
    group.current.lookAt(x, y, 4);
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={46.683}
        >
          <group
            name="bfb1ea86655f4c4ab4c6cbbb449cedf4fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="BirdOrange_all">
                  <group
                    name="Main"
                    position={[-0.083, 0, 0.451]}
                    rotation={[0, -0.074, 0]}
                  >
                    <group name="Object_6">
                      <primitive object={nodes._rootJoint} />
                      <group name="Object_50" />
                      <skinnedMesh
                        name="Object_51"
                        geometry={nodes.Object_51.geometry}
                        material={materials.BirdOrange_LMB}
                        skeleton={nodes.Object_51.skeleton}
                      />
                    </group>
                  </group>
                  <group name="Geometry">
                    <group name="BirdOrange" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
