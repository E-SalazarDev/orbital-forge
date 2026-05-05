import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Trail } from '@react-three/drei'
import * as THREE from 'three'

export default function PlasmaTrail({ start, end, color, speed = 0.08 }) {
  const ref = useRef()
  const prog = useRef(Math.random())
  const sv = useMemo(() => new THREE.Vector3(...start), [])
  const ev = useMemo(() => new THREE.Vector3(...end), [])
  const pos = useMemo(() => new THREE.Vector3(), [])

  useFrame((_, dt) => {
    prog.current = (prog.current + dt * speed) % 1
    pos.lerpVectors(sv, ev, prog.current)
    if (ref.current) ref.current.position.copy(pos)
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