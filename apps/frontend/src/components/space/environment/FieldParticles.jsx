import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { P } from '../../../lib/palette'

export default function FieldParticles() {
  const ref = useRef()

  const geometry = useMemo(() => {
    const positions = []

    for (let i = 0; i < 800; i++) {
      const radius = 3 + Math.random() * 10
      const angle = Math.random() * Math.PI * 2

      positions.push(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 6,
        Math.sin(angle) * radius,
      )
    }

    const bufferGeometry = new THREE.BufferGeometry()
    bufferGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3),
    )

    return bufferGeometry
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.05
  })

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.055}
        color={P.cyan}
        sizeAttenuation
        transparent
        opacity={0.45}
      />
    </points>
  )
}