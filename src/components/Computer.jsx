import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Computer = (props) => {
  const computerRef = useRef();
  const { scene } = useGLTF('/models/computer.glb');

  useGSAP(() => {
    gsap.to(computerRef.current.position, {
      y: computerRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <mesh {...props} ref={computerRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

useGLTF.preload('/models/computer.glb');

export default Computer;
