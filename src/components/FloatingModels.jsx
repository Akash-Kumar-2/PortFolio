import { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ROOM_CENTER = [0, -5];
const BOUNCE_RADIUS = 7;
const COLLISION_RADIUS = 3;
const CORNER_RANGE = 3.5; // each model floats within ±3.5 of its corner origin

const registry = [];
const registerModel = (entry) => { registry.push(entry); };

const reflectVelocity = (vel, nx, ny) => {
  const dot = vel[0] * nx + vel[1] * ny;
  if (dot < 0) {
    vel[0] -= 2 * dot * nx;
    vel[1] -= 2 * dot * ny;
  }
};

const FloatingModel = ({ path, initPos, initVel, rotation, scale, color }) => {
  const meshRef = useRef();
  const velRef = useRef([...initVel]);
  const origin = [initPos[0], initPos[1]];
  const { scene } = useGLTF(path);

  useGSAP(() => {
    gsap.to(meshRef.current.rotation, {
      y: `+=${Math.PI * 2}`,
      duration: 20,
      repeat: -1,
      ease: 'none',
    });
  });

  const regEntry = useRef(null);
  if (!regEntry.current) {
    regEntry.current = { getPos: () => meshRef.current?.position, velRef, origin };
    registerModel(regEntry.current);
  }

  const cloned = scene.clone();
  if (color) {
    cloned.traverse((child) => {
      if (child.isMesh) {
        child.material = child.material.clone();
        child.material.color.set(color);
      }
    });
  }

  return (
    <primitive ref={meshRef} object={cloned} position={initPos} rotation={rotation} scale={scale} />
  );
};

const FloatingRings = ({ initPos, initVel }) => {
  const groupRef = useRef();
  const velRef = useRef([...initVel]);
  const origin = [initPos[0], initPos[1]];
  const texture = useTexture('/textures/rings.png');

  useGSAP(() => {
    gsap.to(groupRef.current.rotation, {
      x: `-=${Math.PI * 2}`,
      y: `+=${Math.PI * 2}`,
      duration: 18,
      repeat: -1,
      ease: 'none',
    });
  });

  const regEntry = useRef(null);
  if (!regEntry.current) {
    regEntry.current = { getPos: () => groupRef.current?.position, velRef, origin };
    registerModel(regEntry.current);
  }

  return (
    <group ref={groupRef} position={initPos} scale={0.8}>
      {Array.from({ length: 4 }, (_, i) => (
        <mesh key={i}>
          <torusGeometry args={[(i + 1) * 0.5, 0.1]} />
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
};

const PhysicsTicker = () => {
  useFrame((_, delta) => {
    // move + corner zone + HackerRoom bounce
    for (const e of registry) {
      const pos = e.getPos();
      if (!pos) continue;
      const vel = e.velRef.current;
      const org = e.origin;

      pos.x += vel[0] * delta;
      pos.y += vel[1] * delta;

      // bounce within corner zone
      if (pos.x > org[0] + CORNER_RANGE) vel[0] = -Math.abs(vel[0]);
      if (pos.x < org[0] - CORNER_RANGE) vel[0] =  Math.abs(vel[0]);
      if (pos.y > org[1] + CORNER_RANGE) vel[1] = -Math.abs(vel[1]);
      if (pos.y < org[1] - CORNER_RANGE) vel[1] =  Math.abs(vel[1]);

      // bounce away from HackerRoom
      const dx = pos.x - ROOM_CENTER[0];
      const dy = pos.y - ROOM_CENTER[1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < BOUNCE_RADIUS) {
        reflectVelocity(vel, dx / dist, dy / dist);
      }
    }

    // inter-model elastic collision
    for (let i = 0; i < registry.length; i++) {
      for (let j = i + 1; j < registry.length; j++) {
        const posA = registry[i].getPos();
        const posB = registry[j].getPos();
        if (!posA || !posB) continue;

        const dx = posA.x - posB.x;
        const dy = posA.y - posB.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < COLLISION_RADIUS && dist > 0) {
          const nx = dx / dist;
          const ny = dy / dist;
          const velA = registry[i].velRef.current;
          const velB = registry[j].velRef.current;

          const dvx = velA[0] - velB[0];
          const dvy = velA[1] - velB[1];
          const dot = dvx * nx + dvy * ny;

          if (dot < 0) {
            velA[0] -= dot * nx;
            velA[1] -= dot * ny;
            velB[0] += dot * nx;
            velB[1] += dot * ny;
          }

          const overlap = (COLLISION_RADIUS - dist) / 2;
          posA.x += nx * overlap;
          posA.y += ny * overlap;
          posB.x -= nx * overlap;
          posB.y -= ny * overlap;
        }
      }
    }
  });

  return null;
};

const FloatingModels = () => {
  return (
    <group>
      <PhysicsTicker />
      {/* top-left corner */}
      <FloatingModel
        path="/models/react.glb"
        initPos={[-13, 7, -6]}
        initVel={[1.0, -0.7]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.45}
      />
      {/* bottom-right corner */}
      <FloatingModel
        path="/models/cube.glb"
        initPos={[12, -7, -6]}
        initVel={[-0.8, 0.9]}
        rotation={[2.6, 0.8, -1.8]}
        scale={1.2}
        color="#00d4ff"
      />
      {/* top-right corner */}
      <FloatingModel
        path="/models/computer.glb"
        initPos={[11, 7, -7]}
        initVel={[-0.7, -0.9]}
        rotation={[0, Math.PI / 4, 0]}
        scale={1.8}
      />
      {/* bottom-left corner */}
      <FloatingRings
        initPos={[-12, -6, -5]}
        initVel={[0.9, 0.8]}
      />
    </group>
  );
};

useGLTF.preload('/models/react.glb');
useGLTF.preload('/models/cube.glb');
useGLTF.preload('/models/computer.glb');

export default FloatingModels;
