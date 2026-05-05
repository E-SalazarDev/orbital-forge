import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { P } from '../../lib/palette'

export default function HoloRings() {
  const r1 = useRef()
  const r2 = useRef()
  const r3 = useRef()
  const r4 = useRef()

  useFrame((s) => {
    const t = s.clock.elapsedTime
    if (r1.current) r1.current.rotation.z = t * 0.35
    if (r2.current) r2.current.rotation.x = t * 0.22
    if (r3.current) r3.current.rotation.y = -t * 0.18
    if (r4.current) {
      r4.current.rotation.z = -t * 0.12
      r4.current.rotation.x = t * 0.08
    }
  })

  return (
    <group>
      <mesh ref={r1} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[4.6, 0.022, 4, 140]} />
        <meshStandardMaterial color={P.cyan} emissive={P.cyan} emissiveIntensity={1.4} transparent opacity={0.7} />
      </mesh>

      <mesh ref={r2} rotation={[Math.PI / 2.8, 0.6, 0]}>
        <torusGeometry args={[5.8, 0.016, 4, 160]} />
        <meshStandardMaterial color={P.violet} emissive={P.violet} emissiveIntensity={1.2} transparent opacity={0.65} />
      </mesh>

      <mesh ref={r3} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.2, 0.016, 4, 110]} />
        <meshStandardMaterial color={P.gold} emissive={P.gold} emissiveIntensity={1.0} transparent opacity={0.6} />
      </mesh>

      <mesh ref={r4} rotation={[Math.PI / 3.5, 0.9, 0.2]}>
        <torusGeometry args={[7.1, 0.01, 4, 200]} />
        <meshStandardMaterial color={P.pink} emissive={P.pink} emissiveIntensity={0.8} transparent opacity={0.5} />
      </mesh>
    </group>
  )
}