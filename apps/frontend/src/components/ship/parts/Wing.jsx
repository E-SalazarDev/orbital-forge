import { Geometry, Base, Subtraction, Addition } from '@react-three/csg'

/**
 * Corte circular con forma de aro.
 * Lo usamos para “morder” la turbina y crear huecos mecánicos.
 */
function RingCut({
  position = [0, 0, 0],
  radius = 1.4,
  tube = 0.2,
  radialSegments = 32,
  tubularSegments = 48,
}) {
  return (
    <Subtraction position={position}>
      <torusGeometry args={[radius, tube, radialSegments, tubularSegments]} />
    </Subtraction>
  )
}

/**
 * Corte esférico.
 * Sirve para hacer cavidades redondeadas dentro del motor.
 */
function SphereCut({
  position = [0, 0, 0],
  radius = 1,
  widthSegments = 32,
  heightSegments = 32,
}) {
  return (
    <Subtraction position={position}>
      <sphereGeometry args={[radius, widthSegments, heightSegments]} />
    </Subtraction>
  )
}

/**
 * Cuerpo cilíndrico principal de la turbina.
 */
function EngineBody() {
  return (
    <Addition rotation={[Math.PI / 2, 1, 0]} position={[0, 0, 0.3]}>
      <cylinderGeometry args={[0.8, 1.5, 3, 32]} />
    </Addition>
  )
}

export default function Wing() {
  return (
    <group position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1}>
      <mesh>
        <Geometry>
          {/* Base plana de la pieza */}
          <Base>
            <boxGeometry args={[3.1, 0.2, 2]} />
          </Base>

          {/* Cuerpo principal añadido encima de la base */}
          <EngineBody />

          {/* Cortes tipo anillos para darle forma de turbina */}
          <RingCut position={[0, 0, -0.9]} radius={1.4} tube={0.2} />
          <RingCut position={[0, 0, 0]} radius={1.4} tube={0.2} />
          <RingCut position={[0, 0, 1]} radius={1.3} tube={0.4} />

          {/* Cortes redondeados internos */}
          <SphereCut position={[0, 0, -1]} radius={1} />
          <SphereCut position={[0, 0, 2]} radius={0.6} widthSegments={24} heightSegments={24} />
        </Geometry>

        {/* Material final de toda la geometría CSG */}
        <meshStandardMaterial
          color="#ef233c"
          metalness={0.35}
          roughness={0.45}
        />
      </mesh>
    </group>
  )
}