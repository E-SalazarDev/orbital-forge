import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Outlines } from '@react-three/drei'
import { P } from '../../lib/palette'

// ─── CUBOS DE DATOS ORBITANDO ────────────────────────────────────────────────
export default function  OrbitingData({ count = 16, radius = 7.2 }) {
  const groupRef = useRef()
  useFrame((s) => { if (groupRef.current) groupRef.current.rotation.y = s.clock.elapsedTime * 0.12 })

  return (
    <group ref={groupRef}>
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * Math.PI * 2
        const color = [P.cyan, P.violet, P.pink, P.gold][i % 4]
        const size  = 0.08 + (i % 3) * 0.04
        return (
          <Float key={i} speed={1.5 + i * 0.1} floatIntensity={0.3}>
            <mesh position={[Math.cos(angle) * radius, Math.sin(angle * 2.5) * 1.2, Math.sin(angle) * radius]}>
              <boxGeometry args={[size, size, size]} />
              <meshToonMaterial color={color} emissive={color} emissiveIntensity={0.8} />
              <Outlines thickness={0.02} color="#000" />
            </mesh>
          </Float>
        )
      })}
    </group>
  )
}