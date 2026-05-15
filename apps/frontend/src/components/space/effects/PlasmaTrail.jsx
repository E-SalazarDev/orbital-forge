import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Trail } from '@react-three/drei'
import * as THREE from 'three'

export default function PlasmaTrail({ start, end, color, speed = 0.08 }) {
  const ref = useRef()
  const progress = useRef(Math.random())

  const startVector = useMemo(() => new THREE.Vector3(...start), [start])
  const endVector = useMemo(() => new THREE.Vector3(...end), [end])
  const position = useMemo(() => new THREE.Vector3(), [])

  useFrame((_, delta) => {
    progress.current = (progress.current + delta * speed) % 1
    position.lerpVectors(startVector, endVector, progress.current)

    if (ref.current) {
      ref.current.position.copy(position)
    }
  })

  return (
    <Trail width={0.8} length={10} color={color} attenuation={(t) => t * t * t}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.04, 6, 6]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </Trail>
  )
}