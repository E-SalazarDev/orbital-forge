import { Geometry, Base, Subtraction, Addition } from '@react-three/csg'

function RingCut({ position = [0, 0, 0], radius = 1.4, tube = 0.2, radialSegments = 32, tubularSegments = 48 }) {
  return (
    <Subtraction position={position}>
      <torusGeometry args={[radius, tube, radialSegments, tubularSegments]} />
    </Subtraction>
  )
}

function SphereCut({ position = [0, 0, 0], radius = 1, widthSegments = 32, heightSegments = 32 }) {
  return (
    <Subtraction position={position}>
      <sphereGeometry args={[radius, widthSegments, heightSegments]} />
    </Subtraction>
  )
}

function EngineBody() {
  return (
    <Addition rotation={[Math.PI / 2, 1, 0]} position={[0, 0, 0.3]}>
      <cylinderGeometry args={[0.8, 1.5, 3, 32]} />
    </Addition>
  )
}

export default function Wing({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh>
        <Geometry>
          <Base>
            <boxGeometry args={[3.1, 0.2, 2]} />
          </Base>
          <EngineBody />
          <RingCut position={[0, 0, -0.8]} radius={1.4} tube={0.3} />
          <RingCut position={[0, 0, 0]} radius={1.4} tube={0.2} />
          <RingCut position={[0, 0, 1]} radius={1.3} tube={0.4} />
          <SphereCut position={[0, 0, -2]} radius={1.2} />
          <SphereCut position={[0, 0, 2]} radius={0.6} widthSegments={24} heightSegments={24} />
        </Geometry>

        <meshPhysicalMaterial
            color="#4a2010"     // gris azulado, mismo lenguaje que el cuerpo
          metalness={0.85}
          roughness={0.35}
          clearcoat={0.6}
          clearcoatRoughness={0.25}
          reflectivity={0.7}
          envMapIntensity={2.5}
          emissive="#1a0f00"
          emissiveIntensity={0.06}  // casi nada, solo calidez sutil
        />
      </mesh>

      {/* Boca del motor — acento naranja contenido */}
      <mesh position={[0, 0, 1.4]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.55, 0.08, 16, 32]} />
        <meshStandardMaterial
          color="#2a1500"
          emissive="#d4620a"     // naranja motor, no neón
          emissiveIntensity={1.2}
          roughness={0.3}
          metalness={0.4}
        />
      </mesh>
    </group>
  )
}