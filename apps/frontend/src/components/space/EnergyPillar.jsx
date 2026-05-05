import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Outlines } from '@react-three/drei'

// ─── PILAR DE ENERGÍA ────────────────────────────────────────────────────────
export default function EnergyPillar({ position, color, height = 4, delay = 0 }) {
  const crystalRef = useRef()
  const lightRef   = useRef()

  useFrame((s) => {
    const t = s.clock.elapsedTime + delay
    if (crystalRef.current) crystalRef.current.rotation.y = t * 1.5
    if (lightRef.current) lightRef.current.intensity = 3 + Math.sin(t * 3) * 1.5
  })

  return (
    <group position={position}>
      <mesh position={[0, height / 2 - 0.8, 0]}>
        <cylinderGeometry args={[0.035, 0.035, height, 8]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} transparent opacity={0.65} />
      </mesh>
      <mesh ref={crystalRef} position={[0, height - 0.8, 0]}>
        <octahedronGeometry args={[0.15, 0]} />
        <meshToonMaterial color={color} emissive={color} emissiveIntensity={1.2} />
        <Outlines thickness={0.018} color="#000" />
      </mesh>
      <pointLight ref={lightRef} position={[0, height - 0.8, 0]} intensity={3} color={color} distance={5} />
    </group>
  )
}
