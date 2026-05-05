import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Outlines } from '@react-three/drei'
import { P } from '../../lib/palette'

export default function  MainShip({ position = [0, 0, 0] }) {
  const engine1 = useRef()
  const engine2 = useRef()
  const cockpit = useRef()

  useFrame((s) => {
    const t = s.clock.elapsedTime
    if (engine1.current) engine1.current.intensity = 4 + Math.sin(t * 4) * 1.5
    if (engine2.current) engine2.current.intensity = 4 + Math.sin(t * 4 + 1) * 1.5
    if (cockpit.current) cockpit.current.emissiveIntensity = 0.6 + Math.sin(t * 2) * 0.3
  })

  const toon = (color, emissive = color) => (
    <meshToonMaterial color={color} emissive={emissive} emissiveIntensity={0.12} />
  )

  return (
    <group position={position}>
      {/* FUSELAJE CENTRAL */}
      <mesh>
        <boxGeometry args={[0.5, 0.22, 1.8]} />
        {toon('#7bafd4', '#4a8ab5')}
        <Outlines thickness={0.022} color="#000" />
      </mesh>

      {/* NARIZ */}
      <mesh position={[0, 0, -1.18]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.18, 0.65, 5]} />
        {toon('#5e9fc4', '#3a7aa0')}
        <Outlines thickness={0.018} color="#000" />
      </mesh>

      {/* ALA IZQUIERDA */}
      <mesh position={[-0.78, -0.04, 0.2]}>
        <boxGeometry args={[1.05, 0.09, 0.9]} />
        {toon('#6895bf', '#426e9a')}
        <Outlines thickness={0.018} color="#000" />
      </mesh>
      <mesh position={[-1.2, -0.04, 0.55]} rotation={[0, 0.28, 0]}>
        <boxGeometry args={[0.28, 0.07, 0.42]} />
        {toon('#4a7aaa')}
        <Outlines thickness={0.015} color="#000" />
      </mesh>

      {/* ALA DERECHA */}
      <mesh position={[0.78, -0.04, 0.2]}>
        <boxGeometry args={[1.05, 0.09, 0.9]} />
        {toon('#6895bf', '#426e9a')}
        <Outlines thickness={0.018} color="#000" />
      </mesh>
      <mesh position={[1.2, -0.04, 0.55]} rotation={[0, -0.28, 0]}>
        <boxGeometry args={[0.28, 0.07, 0.42]} />
        {toon('#4a7aaa')}
        <Outlines thickness={0.015} color="#000" />
      </mesh>

      {/* COCKPIT */}
      <mesh position={[0, 0.16, -0.25]}>
        <boxGeometry args={[0.28, 0.18, 0.38]} />
        <meshToonMaterial
          ref={cockpit}
          color={P.cyan}
          emissive={P.cyan}
          emissiveIntensity={0.6}
          transparent
          opacity={0.82}
        />
        <Outlines thickness={0.018} color="#003344" />
      </mesh>

      {/* BLOQUE MOTORES */}
      <mesh position={[0, 0, 0.98]}>
        <boxGeometry args={[0.38, 0.22, 0.36]} />
        {toon('#3a6a9a')}
        <Outlines thickness={0.018} color="#000" />
      </mesh>

      {/* MOTOR IZQ */}
      <group position={[-0.55, -0.04, 0.88]}>
        <mesh>
          <cylinderGeometry args={[0.1, 0.13, 0.48, 7]} />
          {toon('#4a7aaa')}
          <Outlines thickness={0.015} color="#000" />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.1, 0.025, 6, 24]} />
          <meshToonMaterial color={P.pink} emissive={P.pink} emissiveIntensity={1} />
        </mesh>
        <pointLight ref={engine1} position={[0, 0, 0.3]} intensity={4} color={P.pink} distance={3} />
      </group>

      {/* MOTOR DER */}
      <group position={[0.55, -0.04, 0.88]}>
        <mesh>
          <cylinderGeometry args={[0.1, 0.13, 0.48, 7]} />
          {toon('#4a7aaa')}
          <Outlines thickness={0.015} color="#000" />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.1, 0.025, 6, 24]} />
          <meshToonMaterial color={P.pink} emissive={P.pink} emissiveIntensity={1} />
        </mesh>
        <pointLight ref={engine2} position={[0, 0, 0.3]} intensity={4} color={P.pink} distance={3} />
      </group>

      {/* CAÑONES */}
      {[-0.22, 0.22].map((x, i) => (
        <mesh key={i} position={[x, -0.1, -1.05]}>
          <cylinderGeometry args={[0.028, 0.028, 0.55, 6]} />
          <meshToonMaterial color="#c0d8e8" emissive={P.cyan} emissiveIntensity={0.2} />
          <Outlines thickness={0.012} color="#000" />
        </mesh>
      ))}

      {/* FRANJAS ROSAS */}
      <mesh position={[-0.78, 0.0, 0.05]}>
        <boxGeometry args={[0.95, 0.105, 0.08]} />
        <meshToonMaterial color={P.pink} emissive={P.pink} emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.78, 0.0, 0.05]}>
        <boxGeometry args={[0.95, 0.105, 0.08]} />
        <meshToonMaterial color={P.pink} emissive={P.pink} emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}
