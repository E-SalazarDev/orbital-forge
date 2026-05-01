import * as THREE from 'three'
import { useMemo } from 'react'

export default function GeometryExamples() {
  const customShape = useMemo(() => {
    const shape = new THREE.Shape()

    shape.moveTo(0, 1)
    shape.lineTo(0.8, 0.2)
    shape.lineTo(0.5, -0.8)
    shape.lineTo(-0.5, -0.8)
    shape.lineTo(-0.8, 0.2)
    shape.lineTo(0, 1)

    return shape
  }, [])

  const tubeCurve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.8, 0, 0),
      new THREE.Vector3(-0.3, 0.6, 0.2),
      new THREE.Vector3(0.4, -0.4, -0.2),
      new THREE.Vector3(0.9, 0.5, 0),
    ])
  }, [])

  return (
    <group>
      {/* 1. BoxGeometry */}
      <mesh position={[-6, 2, 0]} rotation={[0.2, 0.4, 0]}>
        <boxGeometry args={[1.4, 0.8, 1]} />
        <meshStandardMaterial color="#22d3ee" />
      </mesh>

      {/* 2. SphereGeometry */}
      <mesh position={[-4, 2, 0]} scale={[1, 1, 1]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color="#facc15" />
      </mesh>

      {/* 3. CylinderGeometry */}
      <mesh position={[-2, 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.45, 0.45, 1.4, 32]} />
        <meshStandardMaterial color="#fb7185" />
      </mesh>

      {/* 4. ConeGeometry */}
      <mesh position={[0, 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.5, 1.4, 32]} />
        <meshStandardMaterial color="#f97316" />
      </mesh>

      {/* 5. TorusGeometry */}
      <mesh position={[2, 2, 0]} rotation={[0.6, 0.2, 0]}>
        <torusGeometry args={[0.65, 0.18, 24, 80]} />
        <meshStandardMaterial color="#a855f7" />
      </mesh>

      {/* 6. PlaneGeometry */}
      <mesh position={[4, 2, 0]} rotation={[0, 0.3, 0]}>
        <planeGeometry args={[1.5, 0.8]} />
        <meshStandardMaterial color="#38bdf8" side={THREE.DoubleSide} />
      </mesh>

      {/* 7. TorusKnotGeometry */}
      <mesh position={[-6, 0, 0]} scale={0.65}>
        <torusKnotGeometry args={[0.65, 0.18, 100, 16]} />
        <meshStandardMaterial color="#ec4899" />
      </mesh>

      {/* 8. IcosahedronGeometry */}
      <mesh position={[-4, 0, 0]}>
        <icosahedronGeometry args={[0.75, 0]} />
        <meshStandardMaterial color="#14b8a6" />
      </mesh>

      {/* 9. DodecahedronGeometry */}
      <mesh position={[-2, 0, 0]}>
        <dodecahedronGeometry args={[0.75, 0]} />
        <meshStandardMaterial color="#84cc16" />
      </mesh>

      {/* 10. OctahedronGeometry */}
      <mesh position={[0, 0, 0]}>
        <octahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial color="#60a5fa" />
      </mesh>

      {/* 11. ShapeGeometry */}
      <mesh position={[2, 0, 0]}>
        <shapeGeometry args={[customShape]} />
        <meshStandardMaterial color="#f43f5e" side={THREE.DoubleSide} />
      </mesh>

      {/* 12. ExtrudeGeometry */}
      <mesh position={[4, 0, 0]}>
        <extrudeGeometry
          args={[
            customShape,
            {
              depth: 0.35,
              bevelEnabled: true,
              bevelThickness: 0.05,
              bevelSize: 0.05,
              bevelSegments: 2,
            },
          ]}
        />
        <meshStandardMaterial color="#facc15" />
      </mesh>

      {/* 13. TubeGeometry */}
      <mesh position={[6, 0, 0]}>
        <tubeGeometry args={[tubeCurve, 64, 0.12, 16, false]} />
        <meshStandardMaterial color="#22c55e" />
      </mesh>
    </group>
  )
}