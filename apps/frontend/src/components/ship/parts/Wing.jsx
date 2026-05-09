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

        {/* Material mejorado del cuerpo del motor — titanio quemado con iridiscencia */}
        <meshPhysicalMaterial
          color="#1c1410"           // casi negro con tinte cálido, titanio oxidado
          metalness={0.95}
          roughness={0.18}          // más pulido → más reflejos especulares
          clearcoat={1.0}           // capa de barniz completa
          clearcoatRoughness={0.08} // barniz muy liso
          reflectivity={0.9}
          envMapIntensity={3.5}     // reflejos de entorno fuertes
          iridescence={0.6}         // iridiscencia sutil, como titanio quemado
          iridescenceIOR={1.8}
          iridescenceThicknessRange={[100, 400]}
          emissive="#2a0e00"
          emissiveIntensity={0.12}  // calor residual visible en aristas
          sheen={0.1}               // brillo sedoso en ángulos rasantes
          sheenColor="#ff6820"
          sheenRoughness={0.5}
        />
      </mesh>

      {/* Boca del motor — plasma azul-blanco de alta energía */}
      <mesh position={[0, 0, 1.4]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.55, 0.08, 16, 32]} />
        <meshStandardMaterial
          color="#0a0a1a"
          emissive="#4fc3ff"        // azul plasma frío, como ion thruster real
          emissiveIntensity={3.5}   // muy brillante, que queme visualmente
          roughness={0.05}
          metalness={0.2}
          toneMapped={false}        // permite que el emissive supere el rango HDR
        />
      </mesh>

      {/* Anillo interior de combustión — corona naranja-blanco */}
      <mesh position={[0, 0, 1.28]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.32, 0.055, 12, 32]} />
        <meshStandardMaterial
          color="#080400"
          emissive="#fff0aa"        // blanco-amarillo, núcleo de combustión
          emissiveIntensity={5.0}
          roughness={0.0}
          metalness={0.0}
          toneMapped={false}
        />
      </mesh>

      {/* Halo de calor difuso alrededor de la tobera */}
      <mesh position={[0, 0, 1.55]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.7, 0.12, 8, 32]} />
        <meshStandardMaterial
          color="#000000"
          emissive="#1a6fff"        // azul exterior del plasma
          emissiveIntensity={1.2}
          roughness={0.8}
          metalness={0.0}
          transparent={true}
          opacity={0.35}
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}