import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { P } from '../../lib/palette'

// ─── PARTÍCULAS DE CAMPO ─────────────────────────────────────────────────────
export default function  FieldParticles() {
  const ref = useRef()
  const geo = useMemo(() => {
    const pos = []
    for (let i = 0; i < 800; i++) {
      const r = 3 + Math.random() * 10
      const a = Math.random() * Math.PI * 2
      pos.push(Math.cos(a) * r, (Math.random() - 0.5) * 6, Math.sin(a) * r)
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
    return g
  }, [])
  useFrame((s) => { if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.05 })

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial size={0.055} color={P.cyan} sizeAttenuation transparent opacity={0.45} />
    </points>
  )
}
