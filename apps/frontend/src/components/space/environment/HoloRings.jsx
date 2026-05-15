import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { P } from '../../../lib/palette'

export default function HoloRings() {
  const ringOneRef = useRef()
  const ringTwoRef = useRef()
  const ringThreeRef = useRef()
  const ringFourRef = useRef()

  useFrame((state) => {
    const time = state.clock.elapsedTime

    if (ringOneRef.current) ringOneRef.current.rotation.z = time * 0.35
    if (ringTwoRef.current) ringTwoRef.current.rotation.x = time * 0.22
    if (ringThreeRef.current) ringThreeRef.current.rotation.y = -time * 0.18

    if (ringFourRef.current) {
      ringFourRef.current.rotation.z = -time * 0.12
      ringFourRef.current.rotation.x = time * 0.08
    }
  })

  return (
    <group>
      <mesh ref={ringOneRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[4.6, 0.022, 4, 140]} />
        <meshStandardMaterial
          color={P.cyan}
          emissive={P.cyan}
          emissiveIntensity={1.4}
          transparent
          opacity={0.7}
        />
      </mesh>

      <mesh ref={ringTwoRef} rotation={[Math.PI / 2.8, 0.6, 0]}>
        <torusGeometry args={[5.8, 0.016, 4, 160]} />
        <meshStandardMaterial
          color={P.violet}
          emissive={P.violet}
          emissiveIntensity={1.2}
          transparent
          opacity={0.65}
        />
      </mesh>

      <mesh ref={ringThreeRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.2, 0.016, 4, 110]} />
        <meshStandardMaterial
          color={P.gold}
          emissive={P.gold}
          emissiveIntensity={1}
          transparent
          opacity={0.6}
        />
      </mesh>

      <mesh ref={ringFourRef} rotation={[Math.PI / 3.5, 0.9, 0.2]}>
        <torusGeometry args={[7.1, 0.01, 4, 200]} />
        <meshStandardMaterial
          color={P.pink}
          emissive={P.pink}
          emissiveIntensity={0.8}
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  )
}