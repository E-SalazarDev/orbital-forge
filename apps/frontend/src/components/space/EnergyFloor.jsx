import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { P } from '../../lib/palette'

// ─── PLATAFORMA ENERGÉTICA ───────────────────────────────────────────────────
export default function EnergyFloor() {
  const lineRef = useRef()

  useFrame((s) => {
    if (lineRef.current) lineRef.current.material.opacity = 0.22 + Math.sin(s.clock.elapsedTime * 0.8) * 0.08
  })

  const radialLines = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => {
      const angle = (i / 12) * Math.PI * 2
      const points = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(Math.cos(angle) * 9, 0, Math.sin(angle) * 9),
      ]
      return new THREE.BufferGeometry().setFromPoints(points)
    })
  }, [])

  return (
    <group position={[0, -0.8, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[9.5, 64]} />
        <meshStandardMaterial color={P.cyan} transparent opacity={0.04} emissive={P.cyan} emissiveIntensity={0.6} />
      </mesh>

      {[
        { r: 2.8, color: P.cyan,   opacity: 0.55, emissive: 1.2 },
        { r: 5.2, color: P.violet, opacity: 0.45, emissive: 1.0 },
        { r: 8.0, color: P.gold,   opacity: 0.40, emissive: 0.9 },
      ].map((c, i) => (
        <mesh key={i} ref={i === 0 ? lineRef : undefined} rotation={[-Math.PI / 2, 0, 0]}>
          <torusGeometry args={[c.r, 0.018, 4, 128]} />
          <meshStandardMaterial color={c.color} emissive={c.color} emissiveIntensity={c.emissive} transparent opacity={c.opacity} />
        </mesh>
      ))}

      {radialLines.map((geo, i) => (
        <line key={i} geometry={geo}>
          <lineBasicMaterial color={P.cyan} transparent opacity={0.07} />
        </line>
      ))}

      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[9.5, 0.03, 4, 180]} />
        <meshStandardMaterial color={P.cyan} emissive={P.cyan} emissiveIntensity={1.4} />
      </mesh>
    </group>
  )
}
